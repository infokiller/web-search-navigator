const DEFAULT_OPTIONS = {
  wrapNavigation: false,
  autoSelectFirst: true,
  hideOutline: false,
  delay: 0,
  googleIncludeCards: true,
  nextKey: ['down', 'j'],
  previousKey: ['up', 'k'],
  navigatePreviousResultPage: ['left', 'h'],
  navigateNextResultPage: ['right', 'l'],
  navigateKey: ['return', 'space'],
  navigateNewTabBackgroundKey:
          ['ctrl+return', 'command+return', 'ctrl+space'],
  navigateNewTabKey:
          ['ctrl+shift+return', 'command+shift+return', 'ctrl+shift+space'],
  navigateSearchTab: ['a', 's'],
  navigateImagesTab: ['i'],
  navigateVideosTab: ['v'],
  navigateMapsTab: ['m'],
  navigateNewsTab: ['n'],
  navigateShoppingTab: ['alt+s'],
  navigateBooksTab: ['b'],
  navigateFlightsTab: ['alt+l'],
  navigateFinancialTab: ['f'],
  focusSearchInput: ['/', 'escape'],
  navigateShowAll: ['z z', 'ctrl+shift+a', 'command+shift+a'],
  navigateShowHour: ['z h', 'ctrl+shift+h', 'command+shift+h'],
  navigateShowDay: ['z d', 'ctrl+shift+d', 'command+shift+d'],
  navigateShowWeek: ['z w', 'ctrl+shift+w', 'command+shift+w'],
  navigateShowMonth: ['z m', 'ctrl+shift+m', 'command+shift+m'],
  navigateShowYear: ['z y', 'ctrl+shift+y', 'command+shift+y'],
  toggleSort: ['z s', 'ctrl+shift+s', 'command+shift+s'],
  searchEngines: {
    startpage: false,
    youtube: false,
  }};

/**
 * @param {StorageArea} storage The storage area to which this section will
 *  write.
 * @param {Object} defaultValues The default options.
 * @constructor
 */
class BrowserStorage {
  constructor(storage, defaultValues) {
    this.storage = storage;
    this.defaultValues = defaultValues;
  }
  load() {
    return new Promise((resolve) => {
      this.storage.get(this.values).then((values) => {
        // eslint-disable-next-line no-undef
        if (!browser.runtime.lastError) {
          // Merge options from storage with defaults.
          this.values = {...this.defaultValues, ...values};
        }
        resolve();
      });
    });
  }
  save() {
    return this.storage.set(this.values);
  }
}

const createSyncedOptions = () => {
  // eslint-disable-next-line no-undef
  return new BrowserStorage(browser.storage.sync, DEFAULT_OPTIONS);
};

// eslint-disable-next-line no-unused-vars
class ExtensionOptions {
  constructor() {
    this.sync = createSyncedOptions();
    // eslint-disable-next-line no-undef
    this.local = new BrowserStorage(browser.storage.local, {
      lastQueryUrl: null,
      lastFocusedIndex: 0,
    });
  }

  load() {
    return Promise.all([this.local.load(), this.sync.load()]);
  }
}
