Object.assign(extension, {
  searchEngine: getSearchEngine(),
  observedAdditions: 0,
  known_results: null,
  
  init(loadOptions) {
    if(extension.searchEngine.endlessScrolling){
      this.supportEndlessScrolling(extension.searchEngine.endlessScrolling.container)
    }
    if (extension.searchEngine.canInit()) {
      loadOptions.then(() => this.initResultsNavigation());
    }
    loadOptions.then(() => this.initCommonSearchNavigation());
  },
  /**
   * Gets the element to activate upon navigation. The focused element in the document is preferred (if there is one)
   * over the highlighted result. Note that the focused element does not have to be an anchor <a> element.
   *
   * @param {SearchResultCollection} results
   * @param {boolean} linkOnly If true the focused element is preferred only when it is a link with "href" attribute.
   * @return {Element}
   */
  getElementToActivate(results, linkOnly = false) {
        const focusedElement = document.activeElement;

        if (focusedElement !== null) {
          const isLink = (focusedElement.localName === 'a' && focusedElement.hasAttribute('href'));

          if (!linkOnly || isLink) {
            return focusedElement;
          }
        }

        return results.items[results.focusedIndex].anchor;
  },

  initResultsNavigation() {
    const options = this.options.sync.values;
    const lastNavigation = this.options.local.values;
    const results = this.searchEngine.getSearchLinks();
    this.known_results = results; //Find a better way to solve this

    let isFirstNavigation = true;
    if (options.autoSelectFirst) {
      // Highlight the first result when the page is loaded, but don't scroll to
      // it because there may be KP cards such as stock graphs.
      results.focus(0, false);
    }
    if (location.href === lastNavigation.lastQueryUrl) {
      isFirstNavigation = false;
      results.focus(lastNavigation.lastFocusedIndex);
    }
    this.register(options.nextKey, () => {
      if (!options.autoSelectFirst && isFirstNavigation) {
        results.focus(0);
        isFirstNavigation = false;
      } else {
        results.focusNext(options.wrapNavigation);
      }
    });
    this.register(options.previousKey, () => {
      if (!options.autoSelectFirst && isFirstNavigation) {
        results.focus(0);
        isFirstNavigation = false;
      } else {
        results.focusPrevious(options.wrapNavigation);
      }
    });
    this.register(options.navigateKey, () => {
      const link = this.getElementToActivate(results);
      lastNavigation.lastQueryUrl = location.href;
      lastNavigation.lastFocusedIndex = results.focusedIndex;
      this.options.local.save();
      link.click();
    });
    this.register(options.navigateNewTabKey, () => {
      const link = this.getElementToActivate(results, true);
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: {
          url: link.href,
          active: true
        }
      });
    });
    this.register(options.navigateNewTabBackgroundKey, () => {
      const link = this.getElementToActivate(results, true);
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: {
          url: link.href,
          active: false
        }
      });
    });
    this.register(options.navigateShowAll, () => this.searchEngine.changeTools('a'));
    this.register(options.navigateShowHour, () => this.searchEngine.changeTools('h'));
    this.register(options.navigateShowDay, () => this.searchEngine.changeTools('d'));
    this.register(options.navigateShowWeek, () => this.searchEngine.changeTools('w'));
    this.register(options.navigateShowMonth, () => this.searchEngine.changeTools('m'));
    this.register(options.navigateShowYear, () => this.searchEngine.changeTools('y'));
    this.register(options.toggleSort, () => this.searchEngine.changeTools(null));
  },

  initCommonSearchNavigation() {
    const tabs = this.searchEngine.tabs;
    const options = this.options.sync.values;

    // Bind globally otherwise Mousetrap ignores keypresses inside inputs.
    this.registerGlobal(options.focusSearchInput, (event) => {
      const target = event.target || event.srcElement;
      const searchInput = document.querySelector(this.searchEngine.searchBoxSelector);

      // Handle keypress inside the search box.
      if (target.matches(this.searchboxSelector)) {
        if (searchInput.selectionStart === 0 && searchInput.selectionEnd === searchInput.value.length) {
          // Everything is selected; deselect all.
          searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
        } else {
          // Closing search suggestions via document.body.click() or searchInput.blur() breaks the state of the google's
          // controller. Suggestion box is closed yet it won't re-appear on the next search box focus event.

          // Input can be blurred only when suggestion box is already closed hence blur event is queued.
          window.setTimeout(() => searchInput.blur());

          // Invoke the default handler which will close-up search suggestions properly (google's controller won't break),
          // but it won't remove the focus.
          return true;
        }
      }
      // Handle keypress outside search box.
      else {
        searchInput.select();
        searchInput.click();
      }
    });

    for (let i = 0; i < tabs.length; i++) {
      const tabCommand = tabs[i];
      this.register(tabCommand[0], () => {
        const node = document.querySelector(tabCommand[1]);
        if (node !== null) {
          // Some search engines use forms instead of links for navigation
          if (node.tagName == "FORM") {
            node.submit()
          } else {
            location.href = node.href;
          }
        }
      });
    }
  },

  registerGlobal(shortcut, callback) {
    Mousetrap.bindGlobal(shortcut, function (event) {
      const result = callback(event);
      if (result !== true && event !== null) {
        return false;
      }
    });
  },

  register(shortcut, callback) {
    Mousetrap.bind(shortcut, function (event) {
      const result = callback();
      if (result !== true && event !== null) {
        return false;
      }
    });
  },
  /**
   * Observes the number of childnodes of container_selector
   * and compares them with this.known_results.items. Automatically
   * inits a reload of the navigation when they don't match up. This 
   * ensures that all search_links are always up to date when scrolling.
   * 
   * @param {String} container_selector 
   */
  supportEndlessScrolling(container_selector){
    container = document.querySelector(container_selector);
    const config = { attributes: false, childList: true, subtree: false };
    let first_obversation = true;
    const observer = new MutationObserver((mutationsList, observer) => {
      if (first_obversation && this.known_results){
        this.observedAdditions = this.known_results.items.length
        first_obversation = false;
      }
      this.observedAdditions = this.observedAdditions + mutationsList[0].addedNodes.length;
      if(this.known_results && this.known_results.items.length < this.observedAdditions){
        //Initialize a reload of navigation, save local values 
        this.options.local.values.lastQueryUrl = location.href;
        this.options.local.values.lastFocusedIndex = this.known_results.focusedIndex;
        extension.options.local.save().then(()=>{
          loadOptions.then(() => this.initResultsNavigation());
          loadOptions.then(() => this.initCommonSearchNavigation());
        })
      }
    })
    observer.observe(container, config)
  }
});

/**
 * @param {...[Element[], function|null]} includedNodeLists An array of tuples.
 * Each tuple contains collection of the search results optionally accompanied
 * with their container selector.
 * @constructor
 */
function SearchResultCollection(includedNodeLists, excludedNodeLists) {
  /**
   * @type {SearchResult[]}
   */
  this.items = [];
  excludedResultsSet = new Set();

  if (excludedNodeLists !== undefined) {
    for (const nodes of excludedNodeLists) {
      for (const node of nodes) {
        excludedResultsSet.add(node);
      }
    }
  }

  for (const result of includedNodeLists) {
    const nodes = result[0];
    const containerSelector = result[1];
    for (let j = 0; j < nodes.length; j++) {
      const node = nodes[j];
      if (!excludedResultsSet.has(node)) {
        this.items.push(new SearchResult(node, containerSelector));
      }
    }
  }
  // Sort items by their document position.
  this.items.sort((a, b) => {
    const position = a.anchor.compareDocumentPosition(b.anchor);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
      return -1;
    } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      return 1;
    } else {
      return 0;
    }
  });
  this.focusedIndex = 0;
  this.getHighlightedElement = function (index) {
    const selector = getFromContext(extension.searchEngine.HighlightedParentSelector);
    if (selector != null) {
        return this.items[index].anchor.closest(selector);
    } else {
        return this.items[index].anchor
    }
  }
  this.focus = function (index, scrollToResult = true) {
    if (this.focusedIndex >= 0) {
      let item = this.getHighlightedElement(this.focusedIndex);
      // Remove focus outline from previous item.
      item.classList.remove(extension.searchEngine.HighlightClass);
      item.classList.remove('no-outline');
    }
    const highlighted = this.getHighlightedElement(index);
    const newItem = this.items[index]
    // Exit if no new item.
    if (!newItem) {
      this.focusedIndex = -1;
      return;
    }
    // Add the focus outline and caret.
    highlighted.classList.add(extension.searchEngine.HighlightClass);
    // Hide focus outline if requested in options.
    if (extension.options.sync.values.hideOutline) {
      newItem.anchor.classList.add('no-outline');
    }
    // We already scroll below, so no need for focus to scroll. The scrolling
    // behavior of `focus` also seems less predictable and caused an issue, see
    // also: https://github.com/infokiller/web-search-navigator/issues/35./
    newItem.anchor.focus({
      preventScroll: true
    });
    // Ensure whole search result container is visible in the viewport, not only
    // the search result link.
    if (scrollToResult) {
      const container = newItem.getContainer() || newItem.anchor;
      scrollToElement(container);
    }
    this.focusedIndex = index;
  };
  this.focusNext = function (shouldWrap) {
    if (this.focusedIndex < this.items.length - 1) {
      this.focus(this.focusedIndex + 1);
    } else if (shouldWrap) {
      this.focus(0);
    }
  };
  this.focusPrevious = function (shouldWrap) {
    if (this.focusedIndex > 0) {
      this.focus(this.focusedIndex - 1);
    } else if (shouldWrap) {
      this.focus(this.items.length - 1);
    } else {
      window.scrollTo(window.scrollX, 0);
    }
  };
}

const scrollToElement = (element) => {
  // Only use margins if they exists
  const marginTop = getFromContext(extension.searchEngine.marginTop, 0);
  const marginBottom = getFromContext(extension.searchEngine.marginBottom, 0);
  const elementBounds = element.getBoundingClientRect();
  // Firefox displays tooltip at the bottom which obstructs the view
  // as a workaround ensure extra space from the bottom in the viewport
  // firefox detection (https://stackoverflow.com/a/7000222/2870889).
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  // hardcoded height of the tooltip plus some margin
  const firefoxBottomDelta = 26;
  const bottomDelta = (isFirefox ? firefoxBottomDelta : 0) + marginBottom;
  if (elementBounds.top < 0 + marginTop) {
    // scroll element to top
    element.scrollIntoView(true);
    window.scrollBy(0, -marginTop);
  } else if (elementBounds.bottom + bottomDelta > window.innerHeight) {
    // scroll element to bottom
    element.scrollIntoView(false);
    window.scrollBy(0, bottomDelta);
  }
};

/**
 * @param {Element} anchor
 * @param {function|null} containerSelector
 * @constructor
 */
function SearchResult(anchor, containerSelector) {
  this.anchor = anchor;
  this.getContainer = function () {
    if (!containerSelector) {
      return this.anchor;
    }
    return containerSelector(this.anchor);
  };
}

/**
 * Return value if context is valid
 * @param {boolean} prop, the returned value on valid context
 * @param {boolean} defaultValue, the returned value when property does not exist
 * @return {*} either value or defaultValue depending on context
 */
function getFromContext(prop, defaultValue=null) {
  if (prop == null) {
    return defaultValue;
  } else if (prop[1] === 'all') {
    return prop[0];
  } else {
    for (const context of prop[1]) {
      if (extension.searchEngine.contexts[context]()) {
        return prop[0];
      }
    }
    return prop[2];
  }
}

 /**
  * Make functions sleeps
  *
  * Can be used with then() callback :
  * sleep.then(() => { stuff to do after sleeps }),
  * Or in an async function, like we do below extension initialization
  * @param {*} milliseconds, How long you want your function to sleep
  * @returns a Promise resolving a timeout
  */
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const loadOptions = extension.options.load();

// Entry Point
// Be sure to load options in order to read the delay and apply it
loadOptions.then(() => {
    const init = async () => {
        await sleep(extension.options.sync.values.delay)
        extension.init(loadOptions)
    }
    init()
})
