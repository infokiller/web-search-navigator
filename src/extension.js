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
        navigateNewTabKey: 'ctrl+return, command+return, ctrl+space',
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

    load: function() {
      return Promise.all([this.local.load(), this.sync.load()]);
    },
  },

  init: function() {
    if (!/^(www|encrypted)\.google\./.test(window.location.hostname)) {
      return;
    }
    const params = getQueryStringParams();
    let loadOptions = this.options.load();
    // Don't initialize results navigation on image search, since it doesn't work
    // there.
    if (params['tbm'] !== 'isch') {
      // This file is loaded only after the DOM is ready, so no need to wait for
      // DOMContentLoaded.
      loadOptions.then(() => this.initResultsNavigation());
    }
    loadOptions.then(() => this.initCommonGoogleSearchNavigation());
  },

  initResultsNavigation: function() {
    let options = this.options.sync.values;
    let lastNavigation = this.options.local.values;
    let results = getGoogleSearchLinks();
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
    let that = this;
    this.register(options.navigateKey, () => {
      let link = results.items[results.focusedIndex];
      lastNavigation.lastQueryUrl = location.href;
      lastNavigation.lastFocusedIndex = results.focusedIndex;
      that.options.local.save();
      link.click();
    });
    this.register(options.navigateNewTabKey, () => {
      let link = results.items[results.focusedIndex];
      window.open(link.href);
    });
  },

  initCommonGoogleSearchNavigation: function() {
    let options = this.options.sync.values;
    this.register(options.focusSearchInput, () => {
      let searchInput = document.getElementById('lst-ib');
      searchInput.focus();
      searchInput.select();
    });
    let tabs = [
      [options.navigateSearchTab, '//a[contains(@class, \'q qs\') and not (contains(@href, \'&tbm=\')) and not (contains(@href, \'maps.google.\'))]'],
      [options.navigateImagesTab, '//a[contains(@class, \'q qs\') and (contains(@href, \'&tbm=isch\'))]'],
      [options.navigateVideosTab, '//a[contains(@class, \'q qs\') and (contains(@href, \'&tbm=vid\'))]'],
      [options.navigateMapsTab, '//a[contains(@class, \'q qs\') and (contains(@href, \'maps.google.\'))]'],
      [options.navigateNewsTab, '//a[contains(@class, \'q qs\') and (contains(@href, \'&tbm=nws\'))]'],
      [options.navigatePreviousResultPage, "//a[@id='pnprev']"],
      [options.navigateNextResultPage, "//a[@id='pnnext']"]
    ];
    for (let i = 0; i < tabs.length; i++) {
      let tabCommand = tabs[i];
      this.register(tabCommand[0], () => {
        let node = getElementByXpath(tabCommand[1]);
        if (node !== null) {
          location.href = node.href;
        }
      });
    }
  },

  register: function(shortcut, callback) {
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
 * @param {NodeList|Node[]} nodes The collection of the anchor nodes representing search result to move focus for.
 * @constructor
 */
function SearchResults(nodes) {
  this.items = Array.prototype.slice.call(nodes);
  this.focusedIndex = 0;
  this.focus = function(index) {
    if (this.focusedIndex >= 0) {
      this.items[this.focusedIndex].classList.remove('highlighted-search-result');
    }
    let newItem = this.items[index];
    newItem.classList.add('highlighted-search-result');
    newItem.focus();
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

function getQueryStringParams() {
  const encodedQueryString = window.location.search.slice(1);
  const encodedParams = encodedQueryString.split('&');
  let params = {};
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
  return new SearchResults(document.querySelectorAll('h3.r a, #pnprev, #pnnext'));
}

function getElementByXpath(path) {
  return document
    .evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue;
}
