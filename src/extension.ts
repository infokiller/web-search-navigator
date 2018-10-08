import * as util from './util';

const browser = util.getBrowser();

const DEFAULT_OPTIONS = {
  wrapNavigation: false,
  autoSelectFirst: true,
  nextKey: 'down, j',
  previousKey: 'up, k',
  navigatePreviousResultPage: 'left, h',
  navigateNextResultPage: 'right, l',
  navigateKey: 'return, space',
  navigateNewTabBackgroundKey: 'ctrl+return, command+return, ctrl+space',
  navigateNewTabKey:
    'ctrl+shift+return, command+shift+return, ctrl+shift+space',
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
};

/**
 * @param {StorageArea} storage The storage area to which this section will write.
 * @param {Object} defaultValues The default options.
 */
class BrowserStorage {
  storage: any;
  values: any;
  constructor(storage: any, defaultValues: any) {
    this.storage = storage;
    this.values = defaultValues;
  }

  load() {
    return new Promise(resolve => {
      this.storage.get(this.values, (values: any) => {
        if (!browser.runtime.lastError) {
          this.values = values;
        }
        resolve();
      });
    });
  }

  save() {
    return new Promise((resolve, reject) => {
      this.storage.set(this.values, () => {
        if (browser.runtime.lastError) {
          reject();
        } else {
          resolve();
        }
      });
    });
  }
}

export const extensionData = {
  options: new BrowserStorage(browser.storage.sync, DEFAULT_OPTIONS),

  state: new BrowserStorage(browser.storage.local, {
    lastQueryUrl: null,
    lastFocusedIndex: 0
  }),

  load() {
    return Promise.all([this.state.load(), this.options.load()]);
  }
};
