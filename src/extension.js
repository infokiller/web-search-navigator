// noinspection JSUnusedGlobalSymbols
const extension = {
  options: {
    sync: new OptionSection(
      chrome.storage.sync,
      {
        wrapNavigation: false,
        autoSelectFirst: true,
        nextKey: 'down, j',
        previousKey: 'up, k',
        navigatePreviousResultPage: 'left, h',
        navigateNextResultPage: 'right, l',
        navigateKey: 'return, space',
        navigateNewTabBackgroundKey: 'ctrl+return, command+return, ctrl+space',
        navigateNewTabKey: 'ctrl+shift+return, command+shift+return, ctrl+shift+space',
        navigateSearchTab: 'a, s',
        navigateImagesTab: 'i',
        navigateVideosTab: 'v',
        navigateMapsTab: 'm',
        navigateNewsTab: 'n',
        focusSearchInput: '/, escape'
      }
    ),

    local: new OptionSection(
      chrome.storage.local,
      {
        lastQueryUrl: null,
        lastFocusedIndex: 0
      }
    ),

    load() {
      return Promise.all([this.local.load(), this.sync.load()]);
    },
  },

  init() {
    if (!/^(www|encrypted)\.google\./.test(window.location.hostname)) {
      return;
    }
    const params = getQueryStringParams();
    const loadOptions = this.options.load();
    // Don't initialize results navigation on image search, since it doesn't work
    // there.
    if (params['tbm'] !== 'isch') {
      // This file is loaded only after the DOM is ready, so no need to wait for
      // DOMContentLoaded.
      loadOptions.then(() => this.initResultsNavigation());
    }
    loadOptions.then(() => this.initCommonGoogleSearchNavigation());
  },

  initResultsNavigation() {
    const options = this.options.sync.values;
    const lastNavigation = this.options.local.values;
    const results = getGoogleSearchLinks();
    let isFirstNavigation = true;
    if (options.autoSelectFirst) {
      // Highlight the first result when the page is loaded.
      results.focus(0);
    }
    if (location.href === lastNavigation.lastQueryUrl) {
      isFirstNavigation = false;
      results.focus(lastNavigation.lastFocusedIndex);
    }
    this.register(options.nextKey, () => {
      if (!options.autoSelectFirst && isFirstNavigation) {
        results.focus(0);
        isFirstNavigation = false;
      }
      else {
        results.focusNext(options.wrapNavigation);
      }
    });
    this.register(options.previousKey, () => {
      if (!options.autoSelectFirst && isFirstNavigation) {
        results.focus(0);
        isFirstNavigation = false;
      }
      else {
        results.focusPrevious(options.wrapNavigation);
      }
    });
    const that = this;
    this.register(options.navigateKey, () => {
      const link = results.items[results.focusedIndex];
      lastNavigation.lastQueryUrl = location.href;
      lastNavigation.lastFocusedIndex = results.focusedIndex;
      that.options.local.save();
      link.click();
    });
    this.register(options.navigateNewTabKey, () => {
      const link = results.items[results.focusedIndex];
      // NOTE: Firefox (tested in 58) somehow from single window.open() opened
      // a link twice. Using timeout solves the issue.
      window.setTimeout(() => window.open(link.href));
    });
    this.register(options.navigateNewTabBackgroundKey, () => {
      const link = results.items[results.focusedIndex];
      chrome.runtime.sendMessage({type: 'tabsCreate', options: {url: link.href, active: false}});
    });
  },

  initCommonGoogleSearchNavigation() {
    const options = this.options.sync.values;
    this.register(options.focusSearchInput, () => {
      const searchInput = document.getElementById('lst-ib');
      searchInput.focus();
      searchInput.select();
    });
    const tabs = [
      [options.navigateSearchTab, '//a[contains(@class, \'q qs\') and not (contains(@href, \'&tbm=\')) and not (contains(@href, \'maps.google.\'))]'],
      [options.navigateImagesTab, '//a[contains(@class, \'q qs\') and (contains(@href, \'&tbm=isch\'))]'],
      [options.navigateVideosTab, '//a[contains(@class, \'q qs\') and (contains(@href, \'&tbm=vid\'))]'],
      [options.navigateMapsTab, '//a[contains(@class, \'q qs\') and (contains(@href, \'maps.google.\'))]'],
      [options.navigateNewsTab, '//a[contains(@class, \'q qs\') and (contains(@href, \'&tbm=nws\'))]'],
      [options.navigatePreviousResultPage, "//a[@id='pnprev']"],
      [options.navigateNextResultPage, "//a[@id='pnnext']"]
    ];
    for (let i = 0; i < tabs.length; i++) {
      const tabCommand = tabs[i];
      this.register(tabCommand[0], () => {
        const node = getElementByXpath(tabCommand[1]);
        if (node !== null) {
          location.href = node.href;
        }
      });
    }
  },

  register(shortcut, callback) {
    key(shortcut, function(event) {
      callback();
      if (event !== null) {
        event.stopPropagation();
        event.preventDefault();
      }
      return false;
    });
  }
};

/**
 * @param {StorageArea} storage The storage area to which this section will write.
 * @param {Object} defaultValues The default options.
 * @constructor
 */
function OptionSection(storage, defaultValues) {
  this.storage = storage;
  this.values = defaultValues;
  this.load = function() {
    return new Promise((resolve) => {
      this.storage.get(
        this.values,
        (values) => {
          if (!chrome.runtime.lastError) {
            this.values = values;
          }
          resolve();
        }
      );
    });
  };
  this.save = function() {
    return new Promise((resolve, reject) => {
      this.storage.set(
        this.values,
        () => {
          if (chrome.runtime.lastError) {
            reject();
          }
          else {
            resolve();
          }
        }
      )
    });
  };
}

/**
 * @param {...[Element[], function|null]} results The array of tuples.
 * Each tuple contains collection of the search results optionally accompanied
 * with their container selector.
 * @constructor
 */
function SearchResultCollection(...results) {
  /**
   * @type {SearchResult[]}
   */
  this.items = [];
  for (let i = 0; i < results.length; i++) {
    const params = results[i];
    const nodes = params[0];
    const containerSelector = params[1];
    for (let j = 0; j < nodes.length; j++) {
      const node = nodes[j];
      this.items.push(new SearchResult(node, containerSelector));
    }
  }
  // need to sort items by their document position)
  this.items.sort((a, b) => {
    const position = a.anchor.compareDocumentPosition(b.anchor);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      return -1;
    } else if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
      return 1;
    } else {
      return 0;
    }
  });
  this.focusedIndex = 0;
  this.focus = function(index) {
    if (this.focusedIndex >= 0) {
      this.items[this.focusedIndex].anchor.classList.remove('highlighted-search-result');
    }
    const newItem = this.items[index];
    newItem.anchor.classList.add('highlighted-search-result');
    newItem.anchor.focus();
    // ensure whole search result container is visible in the viewport, not only
    // the search result link
    const container = newItem.getContainer() || newItem.anchor;
    const containerBounds = container.getBoundingClientRect();
    // firefox displays tooltip at the bottom which obstructs the view
    // as a workaround ensure extra space from the bottom in the viewport
    // firefox detection (https://stackoverflow.com/a/7000222/2870889)
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    // hardcoded height of the tooltip plus some margin
    const firefoxBottomDelta = 26;
    const bottomDelta = (isFirefox ? firefoxBottomDelta: 0);
    if (containerBounds.top < 0) {
      // scroll container to top
      container.scrollIntoView(true);
    }
    else if (containerBounds.bottom + bottomDelta > window.innerHeight) {
      // scroll container to bottom
      container.scrollIntoView(false);
      window.scrollBy(0, bottomDelta);
    }
    this.focusedIndex = index;
  };
  this.focusNext = function(shouldWrap) {
    let nextIndex = 0;
    if (this.focusedIndex < this.items.length - 1) {
      nextIndex = this.focusedIndex + 1;
    }
    else if (!shouldWrap) {
      nextIndex = this.focusedIndex;
    }
    this.focus(nextIndex);
  };
  this.focusPrevious = function(shouldWrap) {
    let previousIndex = this.items.length - 1;
    if (this.focusedIndex > 0) {
      previousIndex = this.focusedIndex - 1;
    }
    else if (!shouldWrap) {
      previousIndex = this.focusedIndex;
    }
    this.focus(previousIndex);
  }
}

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

function getQueryStringParams() {
  const encodedQueryString = window.location.search.slice(1);
  const encodedParams = encodedQueryString.split('&');
  const params = {};
  for (const encodedParam of encodedParams) {
    let [key, encodedValue] = encodedParam.split('=');
    if (!encodedValue) {
      encodedValue = '';
    }
    // + (plus sign) is not decoded by decodeURIComponent so we need to decode
    // it manually.
    encodedValue = encodedValue.replace(/\+/g, ' ');
    params[key] = decodeURIComponent(encodedValue);
  }
  return params;
}

function getGoogleSearchLinks() {
  // the nodes are returned in the document order which is what we want
  return new SearchResultCollection(
    [document.querySelectorAll('h3.r a'), (n) => n.parentElement.parentElement],
    [document.querySelectorAll('div.zjbNbe > a'), null],
    [document.querySelectorAll('#pnprev, #pnnext'), null]
  );
}

function getElementByXpath(path) {
  return document
    .evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue;
}
