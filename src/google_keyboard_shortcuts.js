const extension = {
  options: {
    sync: {
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
    },

    local: {
      lastQueryUrl: false,
      lastFocusedIndex: 0
    },

    load: function() {
      let loadLocal = new Promise((resolve) => {
        chrome.storage.local.get(
          this.local,
          (values) => {
            if (!chrome.runtime.lastError) {
              this.local = values;
            }

            resolve();
          });
      });

      let loadSync = new Promise((resolve) => {
        chrome.storage.sync.get(
          this.sync,
          (values) => {
            if (!chrome.runtime.lastError) {
              this.sync = values;
            }
            resolve();
          }
        );
      });

      return Promise.all([loadLocal, loadSync]);
    }
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
    let options = this.options.sync;
    let lastNavigation = this.options.local;
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

    this.register(options.navigateKey, () => {
      let link = results[results.focusedIndex];
      saveLastNavigation(results.focusedIndex);
      link.click();
    });

    this.register(options.navigateNewTabKey, () => {
      let link = results[results.focusedIndex];
      window.open(link.href);
    });
  },

  initCommonGoogleSearchNavigation: function() {
    let options = this.options.sync;

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

const getQueryStringParams = () => {
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
};

const getGoogleSearchLinks = function() {
  // the nodes are returned in the document order which is what we want
  return new SearchResults(document.querySelectorAll('h3.r a, #pnprev, #pnnext'));
};

function getElementByXpath(path) {
  return document
    .evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue;
}

const saveLastNavigation = (visitedIndex) => {
  chrome.storage.local.set(
    {
      lastQueryUrl: location.href,
      lastFocusedIndex: visitedIndex
    },
    null);
};

extension.init();
