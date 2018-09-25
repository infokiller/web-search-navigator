// noinspection JSUnusedGlobalSymbols
const browser = this.chrome && chrome.runtime ? chrome : this.browser;

const extension = {
  options: {
    sync: new OptionSection(
      browser.storage.sync,
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
        navigateShoppingTab: 'alt+s',
        navigateBooksTab: 'b',
        navigateFlightsTab: 'alt+l',
        navigateFinancialTab: 'f',
        focusSearchInput: '/, escape',
        navigateShowAll: 'ctrl+shift+a',
        navigateShowHour: 'ctrl+shift+h',
        navigateShowDay: 'ctrl+shift+d',
        navigateShowWeek: 'ctrl+shift+w',
        navigateShowMonth: 'ctrl+shift+m',
        navigateShowYear: 'ctrl+shift+y',
        toggleSort: 'ctrl+shift+s'
      }
    ),

    local: new OptionSection(
      browser.storage.local,
      {
        lastQueryUrl: null,
        lastFocusedIndex: 0
      }
    ),

    load() {
      return Promise.all([this.local.load(), this.sync.load()]);
    },
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
          if (!browser.runtime.lastError) {
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
          if (browser.runtime.lastError) {
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
