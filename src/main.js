Object.assign(extension, {
  searchboxSelector: '#searchform input[name=q]',

  init() {
    if (!/^(www|encrypted)\.google\./.test(window.location.hostname)) {
      return;
    }

    const loadOptions = this.options.load();
    // Don't initialize results navigation on image search, since it doesn't work
    // there.
    if (!/[?&]tbm=isch(&|$)/.test(location.search)) {
      // This file is loaded only after the DOM is ready, so no need to wait for
      // DOMContentLoaded.
      loadOptions.then(() => this.initResultsNavigation());
    }
    loadOptions.then(() => this.initCommonGoogleSearchNavigation());
  },

  changeTools(period) {
    // Save current period and sort.
    const res = /&(tbs=qdr:.)(,sbd:.)?/.exec(location.href);
    const currPeriod = (res && res[1]) || '';
    const currSort = (res && res[2]) || '';
    // Remove old period and sort.
    const strippedHref = location.href.replace(/&tbs=qdr:.(,sbd:.)?/, '');
    if (period) {
      location.href =
        strippedHref + (period === 'a' ? '' : '&tbs=qdr:' + period + currSort);
    } else if (currPeriod) {
      // Can't apply sort when not using period.
      location.href =
        strippedHref + '&' + currPeriod + (currSort ? '' : ',sbd:1');
    }
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
    const results = getGoogleSearchLinks();
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
        options: { url: link.href, active: true }
      });
    });
    this.register(options.navigateNewTabBackgroundKey, () => {
      const link = this.getElementToActivate(results, true);
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: { url: link.href, active: false }
      });
    });
    this.register(options.navigateShowAll, () => this.changeTools('a'));
    this.register(options.navigateShowHour, () => this.changeTools('h'));
    this.register(options.navigateShowDay, () => this.changeTools('d'));
    this.register(options.navigateShowWeek, () => this.changeTools('w'));
    this.register(options.navigateShowMonth, () => this.changeTools('m'));
    this.register(options.navigateShowYear, () => this.changeTools('y'));
    this.register(options.toggleSort, () => this.changeTools(null));
  },

  initCommonGoogleSearchNavigation() {
    const options = this.options.sync.values;

    // Bind globally otherwise Mousetrap ignores keypresses inside inputs.
    this.registerGlobal(options.focusSearchInput, (event) => {
      const target = event.target || event.srcElement;
      const searchInput = document.querySelector(this.searchboxSelector);

      // Handle keypress inside the search box.
      if(target.matches(this.searchboxSelector) ) {
        if (searchInput.selectionStart === 0 && searchInput.selectionEnd === searchInput.value.length) {
          // Everything is selected; deselect all.
          searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
        }
        else {
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

    const tabs = [
      [
        options.navigateSearchTab,
        'a.q.qs:not([href*="&tbm="]):not([href*="maps.google."])'
      ],
      [options.navigateImagesTab, 'a.q.qs[href*="&tbm=isch"]'],
      [options.navigateVideosTab, 'a.q.qs[href*="&tbm=vid"]'],
      [options.navigateMapsTab, 'a.q.qs[href*="maps.google."]'],
      [options.navigateNewsTab, 'a.q.qs[href*="&tbm=nws"]'],
      [options.navigateShoppingTab, 'a.q.qs[href*="&tbm=shop"]'],
      [options.navigateBooksTab, 'a.q.qs[href*="&tbm=bks"]'],
      [options.navigateFlightsTab, 'a.q.qs[href*="&tbm=flm"]'],
      [options.navigateFinancialTab, 'a.q.qs[href*="&tbm=fin"]'],
      [options.navigatePreviousResultPage, '#pnprev'],
      [options.navigateNextResultPage, '#pnnext']
    ];
    for (let i = 0; i < tabs.length; i++) {
      const tabCommand = tabs[i];
      this.register(tabCommand[0], () => {
        const node = document.querySelector(tabCommand[1]);
        if (node !== null) {
          location.href = node.href;
        }
      });
    }
  },

  registerGlobal(shortcut, callback) {
    Mousetrap.bindGlobal(shortcut, function(event) {
      const result = callback(event);
      if(result !== true && event !== null) {
        return false;
      }
    });
  },

  register(shortcut, callback) {
    Mousetrap.bind(shortcut, function(event) {
      const result = callback();
      if (result !== true && event !== null) {
        return false;
      }
    });
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
  for (const nodes of excludedNodeLists) {
    for (const node of nodes) {
      excludedResultsSet.add(node);
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
  this.focus = function(index, scrollToResult = true) {
    if (this.focusedIndex >= 0) {
      let item = this.items[this.focusedIndex];
      // Remove focus outline from previous item.
      item && item.anchor.classList.remove('focused-search-result');
      item && item.anchor.classList.remove('no-outline');
    }
    const newItem = this.items[index];
    // Exit if no new item.
    if (!newItem) {
      this.focusedIndex = -1;
      return;
    }
    // Add the focus outline and caret.
    newItem.anchor.classList.add('focused-search-result');
    // Hide focus outline if requested in options.
    if(extension.options.sync.values.hideOutline) {
      newItem.anchor.classList.add('no-outline');
    }
    // We already scroll below, so no need for focus to scroll. The scrolling
    // behavior of `focus` also seems less predictable and caused an issue, see
    // also: https://github.com/infokiller/web-search-navigator/issues/35./
    newItem.anchor.focus({ preventScroll: true });
    // Ensure whole search result container is visible in the viewport, not only
    // the search result link.
    if (scrollToResult) {
      const container = newItem.getContainer() || newItem.anchor;
      scrollToElement(container);
    }
    this.focusedIndex = index;
  };
  this.focusNext = function(shouldWrap) {
    if (this.focusedIndex < this.items.length - 1) {
      this.focus(this.focusedIndex + 1);
    } else if (shouldWrap) {
      this.focus(0);
    }
  };
  this.focusPrevious = function(shouldWrap) {
    if (this.focusedIndex > 0) {
      this.focus(this.focusedIndex - 1);
    } else if (shouldWrap) {
      this.focus(this.items.length - 1);
    } else {
      window.scrollTo(window.scrollX, 0);
    }
  };
}

const scrollToElement = element => {
  const elementBounds = element.getBoundingClientRect();
  // Firefox displays tooltip at the bottom which obstructs the view
  // as a workaround ensure extra space from the bottom in the viewport
  // firefox detection (https://stackoverflow.com/a/7000222/2870889).
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  // hardcoded height of the tooltip plus some margin
  const firefoxBottomDelta = 26;
  const bottomDelta = isFirefox ? firefoxBottomDelta : 0;
  if (elementBounds.top < 0) {
    // scroll element to top
    element.scrollIntoView(true);
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
  this.getContainer = function() {
    if (!containerSelector) {
      return this.anchor;
    }
    return containerSelector(this.anchor);
  };
}

const getGoogleSearchLinks = () => {
  // The nodes are returned in the document order, which is what we want.
  return new SearchResultCollection(
    [
      [
        document.querySelectorAll('#search .r > a:first-of-type, #search .r g-link > a:first-of-type'),
        n => n.parentElement.parentElement
      ],
      [document.querySelectorAll('div.zjbNbe > a'), null],
      [document.querySelectorAll('div.eIuuYe a'), null], // shopping results
      [document.querySelectorAll('#pnprev, #pnnext'), null]
    ],
    [document.querySelectorAll('#search .kp-blk .r > a:first-of-type')]
  );
};

extension.init();
