/* global ExtensionOptions, getSearchEngine, Mousetrap */
/* global getDefaultBottomMargin */

// TODO: Replace with enums when switching to typescript.
const FOCUS_SCROLL_OFF = 0;
const FOCUS_SCROLL_ON = 1;
const FOCUS_SCROLL_ONLY = 2;

// Returns true if scrolling was done.
const scrollToElement = (searchEngine, element) => {
  let topMargin = 0;
  if (searchEngine.getTopMargin) {
    topMargin = searchEngine.getTopMargin(element);
  }
  let bottomMargin = getDefaultBottomMargin();
  if (searchEngine.getBottomMargin) {
    bottomMargin = searchEngine.getBottomMargin(element);
  }
  const elementBounds = element.getBoundingClientRect();
  const scrollY = window.scrollY;
  if (elementBounds.top < topMargin) {
    // scroll element to top
    element.scrollIntoView(true);
    window.scrollBy(0, -topMargin);
  } else if (elementBounds.bottom + bottomMargin > window.innerHeight) {
    // scroll element to bottom
    element.scrollIntoView(false);
    window.scrollBy(0, bottomMargin);
  }
  return Math.abs(window.scrollY - scrollY) > 0.01;
};

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
    // StartPage seems to still focus and change it to body when the page loads.
    if (focusedElement == null || focusedElement.localName === 'body') {
      if (
        this.focusedIndex < 0 ||
        this.focusedIndex >= this.searchResults.length
      ) {
        return null;
      }
      return this.searchResults[this.focusedIndex].anchor;
    }
    const isLink =
      focusedElement.localName === 'a' && focusedElement.hasAttribute('href');
    if (!linkOnly || isLink) {
      return focusedElement;
    }
  }

  highlight(searchResult) {
    const highlighted = searchResult.highlightedElement;
    if (highlighted == null) {
      return;
    }
    highlighted.classList.add(searchResult.highlightClass);
    if (this.options.hideOutline || searchResult.anchor !== highlighted) {
      searchResult.anchor.classList.add('wsn-no-outline');
    }
  }

  unhighlight(searchResult) {
    const highlighted = searchResult.highlightedElement;
    if (highlighted == null) {
      return;
    }
    highlighted.classList.remove(searchResult.highlightClass);
    highlighted.classList.remove('wsn-no-outline');
  }

  focus(index, scroll = FOCUS_SCROLL_ONLY) {
    if (this.focusedIndex >= 0) {
      const searchResult = this.searchResults[this.focusedIndex];
      // If the current result is outside the viewport and FOCUS_SCROLL_ONLY was
      // requested, scroll to the current hidden result, but don't focus on the
      // new result.
      // This behavior is intended to handle cases where the user scrolls away
      // from the currently focused result and then presses the keybindings to
      // focus on the previous/next result. In this case, since the user
      // doesn't see the current result, it's more intuitive to only scroll to
      // the current result, and then on the next keypress they can focus on the
      // previous/next result and actually see on what result they want to focus
      // on.
      if (
        scroll === FOCUS_SCROLL_ONLY &&
        scrollToElement(this.searchEngine, searchResult.container)
      ) {
        return;
      }
      // Remove highlighting from previous item.
      this.unhighlight(searchResult);
    }
    const searchResult = this.searchResults[index];
    if (!searchResult) {
      this.focusedIndex = -1;
      return;
    }
    this.highlight(searchResult);
    // We already scroll below, so no need for focus to scroll. The scrolling
    // behavior of `focus` also seems less predictable and caused an issue, see:
    // https://github.com/infokiller/web-search-navigator/issues/35
    searchResult.anchor.focus({preventScroll: true});
    // Ensure whole search result container is visible in the viewport, not only
    // the search result link.
    if (scroll !== FOCUS_SCROLL_OFF) {
      scrollToElement(this.searchEngine, searchResult.container);
    }
    this.focusedIndex = index;
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

  focusDown(shouldWrap) {
    if (
      this.focusedIndex + this.searchResults.itemsPerRow <
      this.searchResults.length - 1
    ) {
      this.focus(this.focusedIndex + this.searchResults.itemsPerRow);
    } else if (shouldWrap) {
      const focusedRowIndex = this.focusedIndex %
        this.searchResults.itemsPerRow;
      this.focus(focusedRowIndex);
    }
  }

  focusUp(shouldWrap) {
    if ( this.focusedIndex - this.searchResults.itemsPerRow > -1 ) {
      this.focus(this.focusedIndex - this.searchResults.itemsPerRow);
    } else if (shouldWrap) {
      const focusedRowIndex = this.focusedIndex %
        this.searchResults.itemsPerRow;
      this.focus(
          this.searchResults - 1 -
          this.searchResults.itemsPerRow +
          focusedRowIndex,
      );
    } else {
      window.scrollTo(window.scrollY, 0);
    }
  }
}

class WebSearchNavigator {
  constructor() {
    this.bindings = [];
  }

  async init() {
    this.options = new ExtensionOptions();
    await this.options.load();
    this.searchEngine = await getSearchEngine(this.options.sync.getAll());
    if (this.searchEngine == null) {
      return;
    }
    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
    await sleep(this.options.sync.get('delay'));
    // UGLY WORKAROUND: Results navigation breaks YouTube space keybinding for
    // pausing/resuming a video. A workaround is to click on an element on the
    // page (except the video), but for now I'm disabling results navigation
    // when watching a video.
    // TODO: Find a proper fix.
    if (!window.location.href.match(/^https:\/\/(www)\.youtube\.com\/watch/)) {
      this.initResultsNavigation();
    }
    this.injectCSS();
    this.initTabsNavigation();
    this.initChangeToolsNavigation();
    this.initSearchInputNavigation();
    this.bindKeys();
  }

  bindKeys() {
    // NOTE: Mousetrap calls the handler even if there's a larger sequence that
    // ends with the same key. For example, if the user binds both 'a b' and
    // 'b', when pressing the sequence 'a b' both handlers will be called, which
    // is not the desired behavior for this extension. Therefore, we first sort
    // all keybindings by their sequence length, so that handlers of larger
    // sequences will be called before the shorter ones. Then, we only call
    // other handlers if the previous handler returned true.
    this.bindings.sort((a, b) => {
      return b[0].split(' ').length - a[0].split(' ').length;
    });
    let lastEvent;
    let lastHandlerResult;
    for (const [shortcut, element, global, callback] of this.bindings) {
      const wrappedCallback = (event) => {
        if (event === lastEvent && !lastHandlerResult) {
          return;
        }
        lastEvent = event;
        lastHandlerResult = callback(event);
        return lastHandlerResult;
      };
      if (global) {
        /* eslint-disable-next-line new-cap */
        Mousetrap(element).bindGlobal(shortcut, wrappedCallback);
      } else {
        /* eslint-disable-next-line new-cap */
        Mousetrap(element).bind(shortcut, wrappedCallback);
      }
    }
  }

  injectCSS() {
    const style = document.createElement('style');
    style.textContent = this.options.sync.get('customCSS');
    document.head.append(style);
  }

  initSearchInputNavigation() {
    const searchInput = document.querySelector(
        this.searchEngine.searchBoxSelector,
    );
    if (searchInput == null) {
      return;
    }
    // Only apply the extension logic if the key is not something the user may
    // have wanted to type into the searchbox, so that we don't interfere with
    // regular typing.
    const shouldHandleSearchInputKey = (event) => {
      return event.ctrlKey || event.metaKey || event.key === 'Escape';
    };
    // If insideSearchboxHandler returns true, outsideSearchboxHandler will also
    // be called (because it's defined on document, hence has lower priority),
    // in which case we don't want to handle the event. Therefore, we store the
    // last event handled in insideSearchboxHandler, and only handle the event
    // in outsideSearchboxHandler if it's not the same one.
    let lastEvent;
    const outsideSearchboxHandler = (event) => {
      if (event === lastEvent) {
        return !shouldHandleSearchInputKey(event);
      }
      const element = document.activeElement;
      if (
        element.isContentEditable ||
        ['textarea', 'input'].includes(element.tagName.toLowerCase())
      ) {
        return true;
      }
      // Scroll to the search box in case it's outside the viewport so that it's
      // clear to the user that it has focus.
      scrollToElement(this.searchEngine, searchInput);
      searchInput.select();
      searchInput.click();
      return false;
    };
    const insideSearchboxHandler = (event) => {
      lastEvent = event;
      if (!shouldHandleSearchInputKey(event)) {
        return true;
      }
      // Everything is selected; deselect all.
      if (
        searchInput.selectionStart === 0 &&
        searchInput.selectionEnd === searchInput.value.length
      ) {
        // Scroll to the search box in case it's outside the viewport so that
        // it's clear to the user that it has focus.
        scrollToElement(this.searchEngine, searchInput);
        searchInput.setSelectionRange(
            searchInput.value.length,
            searchInput.value.length,
        );
        return false;
      }
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
    };
    this.register(
        this.options.sync.get('focusSearchInput'),
        outsideSearchboxHandler,
    );
    // Bind globally, otherwise Mousetrap ignores keypresses inside inputs.
    // We must bind it separately to the search box element, or otherwise the
    // key event won't always be captured (for example this is the case on
    // Google Search as of 2020-06-22), presumably because the javascript in the
    // page will disable further processing.
    this.register(
        this.options.sync.get('focusSearchInput'),
        insideSearchboxHandler,
        searchInput,
        true,
    );
  }

  registerObject(obj) {
    for (const [optionName, elementOrGetter] of Object.entries(obj)) {
      this.register(this.options.sync.get(optionName), () => {
        if (elementOrGetter == null) {
          return true;
        }
        let element;
        if (elementOrGetter instanceof HTMLElement) {
          element = elementOrGetter;
        } else {
          element = elementOrGetter();
        }
        if (element == null) {
          return true;
        }
        // Some search engines use forms instead of links for navigation
        if (element.tagName == 'FORM') {
          element.submit();
        } else {
          element.click();
        }
        return false;
      });
    }
  }

  initTabsNavigation() {
    const tabs = this.searchEngine.tabs || {};
    this.registerObject(tabs);
  }

  initResultsNavigation() {
    const previousPageButton = this.searchEngine.previousPageButton;
    const nextPageButton = this.searchEngine.nextPageButton;

    this.registerObject({
      navigatePreviousResultPage: previousPageButton,
      navigateNextResultPage: nextPageButton,
    });

    this.resetResultsManager();
    this.registerResultsNavigationKeybindings();
    if (!this.searchEngine.onChangedResults) {
      return;
    }
    this.searchEngine.onChangedResults((appendedOnly) => {
      if (appendedOnly) {
        this.resultsManager.reloadSearchResults();
      } else {
        this.resetResultsManager();
      }
    });
  }

  resetResultsManager() {
    if (this.resultsManager != null) {
      const searchResult =
        this.resultsManager.searchResults[this.resultsManager.focusedIndex];
      // NOTE: it seems that search results can become undefined when the DOM
      // elements are removed (for example when the results change).
      if (searchResult != null) {
        this.resultsManager.unhighlight(searchResult);
      }
    }
    this.resultsManager = new SearchResultsManager(
        this.searchEngine,
        this.options.sync.getAll(),
    );
    this.resultsManager.reloadSearchResults();
    this.isFirstNavigation = true;
    if (this.resultsManager.searchResults.length === 0) {
      return;
    }
    const lastNavigation = this.options.local.values;
    if (
      location.href === lastNavigation.lastQueryUrl &&
      lastNavigation.lastFocusedIndex < this.resultsManager.searchResults.length
    ) {
      this.isFirstNavigation = false;
      this.resultsManager.focus(
          lastNavigation.lastFocusedIndex,
          FOCUS_SCROLL_ON,
      );
    } else if (this.options.sync.get('autoSelectFirst')) {
      // Highlight the first result when the page is loaded, but don't scroll to
      // it because there may be KP cards such as stock graphs.
      this.resultsManager.focus(0, FOCUS_SCROLL_OFF);
    }
  }

  registerResultsNavigationKeybindings() {
    const getOpt = (key) => {
      return this.options.sync.get(key);
    };
    const onFocusChange = (callback) => {
      return () => {
        if (!getOpt('autoSelectFirst') && this.isFirstNavigation) {
          this.resultsManager.focus(0);
          this.isFirstNavigation = false;
        } else {
          const _callback = callback.bind(this.resultsManager);
          _callback(getOpt('wrapNavigation'));
        }
        return false;
      };
    };

    if (!this.searchEngine.gridNavigation) {
      this.register(
          getOpt('nextKey'),
          onFocusChange(this.resultsManager.focusNext),
      );
      this.register(
          getOpt('previousKey'),
          onFocusChange(this.resultsManager.focusPrevious),
      );
    } else {
      this.register(
          getOpt('nextKey'),
          onFocusChange(this.resultsManager.focusDown),
      );
      this.register(
          getOpt('previousKey'),
          onFocusChange(this.resultsManager.focusUp),
      );
      this.register( // left
          getOpt('navigatePreviousResultPage'),
          onFocusChange(this.resultsManager.focusPrevious),
      );
      this.register( // right
          getOpt('navigateNextResultPage'),
          onFocusChange(this.resultsManager.focusNext),
      );
    }
    this.register(getOpt('navigateKey'), () => {
      const link = this.resultsManager.getElementToNavigate();
      if (link == null) {
        return true;
      }
      const lastNavigation = this.options.local.values;
      lastNavigation.lastQueryUrl = location.href;
      lastNavigation.lastFocusedIndex = this.resultsManager.focusedIndex;
      this.options.local.save();
      // If the element is a link, use the href to directly navigate, since some
      // websites will open it in a new tab.
      if (link.localName === 'a' && link.href) {
        window.location.href = link.href;
      } else {
        link.click();
      }
      return false;
    });
    this.register(getOpt('navigateNewTabKey'), () => {
      const link = this.resultsManager.getElementToNavigate(true);
      if (link == null) {
        return true;
      }
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: {
          url: link.href,
          active: true,
        },
      });
      return false;
    });
    this.register(getOpt('navigateNewTabBackgroundKey'), () => {
      const link = this.resultsManager.getElementToNavigate(true);
      if (link == null) {
        return true;
      }
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: {
          url: link.href,
          active: false,
        },
      });
      return false;
    });
  }

  initChangeToolsNavigation() {
    if (this.searchEngine.changeTools == null) {
      return;
    }
    const getOpt = (key) => {
      return this.options.sync.get(key);
    };
    this.register(getOpt('navigateShowAll'), () =>
      this.searchEngine.changeTools('a'),
    );
    this.register(getOpt('navigateShowHour'), () =>
      this.searchEngine.changeTools('h'),
    );
    this.register(getOpt('navigateShowDay'), () =>
      this.searchEngine.changeTools('d'),
    );
    this.register(getOpt('navigateShowWeek'), () =>
      this.searchEngine.changeTools('w'),
    );
    this.register(getOpt('navigateShowMonth'), () =>
      this.searchEngine.changeTools('m'),
    );
    this.register(getOpt('navigateShowYear'), () =>
      this.searchEngine.changeTools('y'),
    );
    this.register(getOpt('toggleVerbatimSearch'), () =>
      this.searchEngine.changeTools('v'),
    );
    this.register(getOpt('toggleSort'), () =>
      this.searchEngine.changeTools(null),
    );
    this.register(getOpt('showImagesLarge'), () =>
      this.searchEngine.changeImageSize('l'),
    );
    this.register(getOpt('showImagesMedium'), () =>
      this.searchEngine.changeImageSize('e'),
    );
    this.register(getOpt('showImagesIcon'), () =>
      this.searchEngine.changeImageSize('i'),
    );
  }

  register(shortcuts, callback, element = document, global = false) {
    for (const shortcut of shortcuts) {
      this.bindings.push([shortcut, element, global, callback]);
    }
  }
}

const extension = new WebSearchNavigator();
extension.init();
