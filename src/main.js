class SearchResultsManager {
  constructor(searchEngine, options) {
    this.searchEngine = searchEngine;
    this.options = options;
    this.focusedIndex = 0;
  }

  reloadSearchResults() {
    this.searchResults = this.searchEngine.getSearchResults();
  }

  /**
   * Returns the element to click on upon navigation. The focused element in the
   * document is preferred (if there is one) over the highlighted result. Note
   * that the focused element does not have to be an anchor <a> element.
   *
   * @param {boolean} linkOnly If true the focused element is preferred only
   * when it is a link with "href" attribute.
   * @return {Element}
   */
  getElementToNavigate(linkOnly = false) {
    const focusedElement = document.activeElement;
    if (focusedElement == null) {
      return this.searchResults[this.focusedIndex].anchor;
    }
    const isLink = focusedElement.localName === 'a' &&
        focusedElement.hasAttribute('href');
    if (!linkOnly || isLink) {
      return focusedElement;
    }
  }

  focus(index, scrollToResult = true) {
    if (this.focusedIndex >= 0) {
      const searchResult = this.searchResults[this.focusedIndex];
      const highlighted = searchResult.highlightedElement;
      // Remove highlighting from previous item.
      highlighted.classList.remove(searchResult.highlightClass);
      highlighted.classList.remove('no-outline');
    }
    const searchResult = this.searchResults[index];
    if (!searchResult) {
      this.focusedIndex = -1;
      return;
    }
    const highlighted = searchResult.highlightedElement;
    // Add the focus outline and caret.
    highlighted.classList.add(searchResult.highlightClass);
    if (this.options.hideOutline || searchResult.anchor !== highlighted) {
      searchResult.anchor.classList.add('no-outline');
    }
    // We already scroll below, so no need for focus to scroll. The scrolling
    // behavior of `focus` also seems less predictable and caused an issue, see:
    // https://github.com/infokiller/web-search-navigator/issues/35
    searchResult.anchor.focus({preventScroll: true});
    // Ensure whole search result container is visible in the viewport, not only
    // the search result link.
    if (scrollToResult) {
      this.scrollToElement(searchResult.container);
    }
    this.focusedIndex = index;
  }

  scrollToElement(element) {
    const marginTop = this.searchEngine.marginTop || 0;
    const marginBottom = this.searchEngine.marginBottom || 0;
    const elementBounds = element.getBoundingClientRect();
    // Firefox displays tooltip at the bottom which obstructs the view
    // as a workaround ensure extra space from the bottom in the viewport
    // firefox detection (https://stackoverflow.com/a/7000222/2870889).
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    // hardcoded height of the tooltip plus some margin
    const firefoxBottomDelta = 26;
    const bottomDelta = (isFirefox ? firefoxBottomDelta : 0) + marginBottom;
    if (elementBounds.top < marginTop) {
      // scroll element to top
      element.scrollIntoView(true);
      window.scrollBy(0, -marginTop);
    } else if (elementBounds.bottom + bottomDelta > window.innerHeight) {
      // scroll element to bottom
      element.scrollIntoView(false);
      window.scrollBy(0, bottomDelta);
    }
  }

  focusNext(shouldWrap) {
    if (this.focusedIndex < this.searchResults.length - 1) {
      this.focus(this.focusedIndex + 1);
    } else if (shouldWrap) {
      this.focus(0);
    }
  }

  focusPrevious(shouldWrap) {
    if (this.focusedIndex > 0) {
      this.focus(this.focusedIndex - 1);
    } else if (shouldWrap) {
      this.focus(this.searchResults.length - 1);
    } else {
      window.scrollTo(window.scrollX, 0);
    }
  }
}

class WebSearchNavigator {
  async init() {
    /* eslint-disable-next-line no-undef */
    this.options = new ExtensionOptions();
    await this.options.load();
    /* eslint-disable-next-line no-undef */
    this.searchEngine = await getSearchEngine(this.options.sync.values);
    if (this.searchEngine == null) {
      return;
    }
    await sleep(this.options.sync.values.delay);
    this.initSearchInputNavigation();
    this.initTabsNavigation();
    this.initResultsNavigation();
    this.initChangeToolsNavigation();
    this.initEndlessScrolling();
  }

  initSearchInputNavigation() {
    // Bind globally, otherwise Mousetrap ignores keypresses inside inputs.
    this.registerGlobal(this.options.sync.values.focusSearchInput, (event) => {
      const target = event.target || event.srcElement;
      const searchInput = document.querySelector(
          this.searchEngine.searchBoxSelector);
      // Handle keypress outside search box.
      if (!target.matches(this.searchEngine.searchboxSelector)) {
        searchInput.select();
        searchInput.click();
        return;
      }
      // Handle keypress inside the search box.
      if (searchInput.selectionStart === 0 &&
          searchInput.selectionEnd === searchInput.value.length) {
        // Everything is selected; deselect all.
        searchInput.setSelectionRange(
            searchInput.value.length, searchInput.value.length);
      } else {
        // Closing search suggestions via document.body.click() or
        // searchInput.blur() breaks the state of google's controller.
        // The suggestion box is closed, yet it won't re-appear on the next
        // search box focus event.

        // Input can be blurred only when the suggestion box is already
        // closed, hence the blur event is queued.
        window.setTimeout(() => searchInput.blur());

        // Invoke the default handler which will close-up search suggestions
        // properly (google's controller won't break), but it won't remove the
        // focus.
        return true;
      }
    });
  }

  initTabsNavigation() {
    const tabs = this.searchEngine.tabs || {};
    for (const [optionName, element] of Object.entries(tabs)) {
      this.register(this.options.sync.values[optionName], () => {
        if (element == null) {
          return;
        }
        // Some search engines use forms instead of links for navigation
        if (element.tagName == 'FORM') {
          element.submit();
        } else {
          element.click();
        }
      });
    }
  }

  initResultsNavigation() {
    this.resultsManager = new SearchResultsManager(this.searchEngine,
        this.options.sync.values);
    this.resultsManager.reloadSearchResults();
    if (this.resultsManager.searchResults.length === 0) {
      return;
    }
    const options = this.options.sync.values;
    const lastNavigation = this.options.local.values;
    let isFirstNavigation = true;
    if (options.autoSelectFirst) {
      // Highlight the first result when the page is loaded, but don't scroll to
      // it because there may be KP cards such as stock graphs.
      this.resultsManager.focus(0, false);
    }
    if (location.href === lastNavigation.lastQueryUrl) {
      isFirstNavigation = false;
      this.resultsManager.focus(lastNavigation.lastFocusedIndex);
    }
    this.register(options.nextKey, () => {
      if (!options.autoSelectFirst && isFirstNavigation) {
        this.resultsManager.focus(0);
        isFirstNavigation = false;
      } else {
        this.resultsManager.focusNext(options.wrapNavigation);
      }
    });
    this.register(options.previousKey, () => {
      if (!options.autoSelectFirst && isFirstNavigation) {
        this.resultsManager.focus(0);
        isFirstNavigation = false;
      } else {
        this.resultsManager.focusPrevious(options.wrapNavigation);
      }
    });
    this.register(options.navigateKey, () => {
      const link = this.resultsManager.getElementToNavigate();
      lastNavigation.lastQueryUrl = location.href;
      lastNavigation.lastFocusedIndex = this.resultsManager.focusedIndex;
      this.options.local.save();
      link.click();
    });
    this.register(options.navigateNewTabKey, () => {
      const link = this.resultsManager.getElementToNavigate(true);
      /* eslint-disable-next-line no-undef */
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: {
          url: link.href,
          active: true,
        },
      });
    });
    this.register(options.navigateNewTabBackgroundKey, () => {
      const link = this.resultsManager.getElementToNavigate(true);
      /* eslint-disable-next-line no-undef */
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: {
          url: link.href,
          active: false,
        },
      });
    });
  }

  initChangeToolsNavigation() {
    const options = this.options.sync.values;
    this.register(options.navigateShowAll, () =>
      this.searchEngine.changeTools('a'));
    this.register(options.navigateShowHour, () =>
      this.searchEngine.changeTools('h'));
    this.register(options.navigateShowDay, () =>
      this.searchEngine.changeTools('d'));
    this.register(options.navigateShowWeek, () =>
      this.searchEngine.changeTools('w'));
    this.register(options.navigateShowMonth, () =>
      this.searchEngine.changeTools('m'));
    this.register(options.navigateShowYear, () =>
      this.searchEngine.changeTools('y'));
    this.register(options.toggleSort, () =>
      this.searchEngine.changeTools(null));
  }

  registerGlobal(shortcut, callback) {
    /* eslint-disable-next-line no-undef */
    Mousetrap.bindGlobal(shortcut, (event) => {
      const result = callback(event);
      if (result !== true && event !== null) {
        return false;
      }
    });
  }

  register(shortcut, callback) {
    /* eslint-disable-next-line no-undef */
    Mousetrap.bind(shortcut, (event) => {
      const result = callback();
      if (result !== true && event !== null) {
        return false;
      }
    });
  }
  /**
   * Observes the number of childnodes of endlessScrollingContainer and compares
   * them with this.results.items. Automatically inits a reload of the
   * navigation when they don't match up. This ensures that all results are
   * always up to date when scrolling.
   */
  initEndlessScrolling() {
    const container = this.searchEngine.endlessScrollingContainer;
    if (!container) {
      return;
    }
    this.observedAdditions = 0;
    const config = {attributes: false, childList: true, subtree: false};
    let firstObservation = true;
    let observedHref = undefined;
    const observer = new MutationObserver(async (mutationsList, observer) => {
      if (firstObservation) {
        observedHref = location.href;
        this.observedAdditions = this.resultsManager.searchResults.length;
        firstObservation = false;
      }
      if (observedHref && observedHref != location.href) {
        // Mutation Server was triggered due to loading a new url -> disconnect
        // the observer
        observer.disconnect();
        return;
      }
      for (const mutations of mutationsList) {
        this.observedAdditions += mutations.addedNodes.length;
      }
      if (this.resultsManager.searchResults.length < this.observedAdditions) {
        this.resultsManager.reloadSearchResults();
      }
    });
    observer.observe(container, config);
  }
}

/**
 * Make functions sleeps
 *
 * Can be used with then() callback :
 * sleep.then(() => { stuff to do after sleeps }),
 * Or in an async function, like we do below extension initialization
 * @param {*} milliseconds, How long you want your function to sleep
 * @return {Promise} a Promise resolving a timeout
 */
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const extension = new WebSearchNavigator();
extension.init();
