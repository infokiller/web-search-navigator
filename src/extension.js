// eslint-disable-next-line
const extension = {
  options: {
    sync: new OptionSection(browser.storage.sync, {
      delay: 0,
      wrapNavigation: false,
      hideOutline: false,
      autoSelectFirst: true,
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
      },
    }),

    local: new OptionSection(browser.storage.local, {
      lastQueryUrl: null,
      lastFocusedIndex: 0,
    }),

    load() {
      return Promise.all([this.local.load(), this.sync.load()]);
    },
  },
};

// Authorized urls for compatible search engines
// eslint-disable-next-line
const searchEnginesUrls = {
  startpage: [
    // It used to be 'https://www.startpage.com/*/*search*' but when requesting
    // this URL chrome actually grants permission to the URL below. This
    // discrepancy causes the options page to think that we don't have
    // permission for startpage.
    'https://www.startpage.com/*',
    'https://startpage.com/*',
  ],
  youtube: [
    'https://www.youtube.com/*',
  ],
};

/**
 * @param {StorageArea} storage The storage area to which this section will
 *  write.
 * @param {Object} defaultValues The default options.
 * @constructor
 */
function OptionSection(storage, defaultValues) {
  this.storage = storage;
  this.values = defaultValues;
  this.load = async function() {
    return new Promise((resolve) => {
      this.storage.get(this.values).then((values) => {
        if (!browser.runtime.lastError) {
          this.values = values;
        }
        resolve();
      });
    });
  };
  this.save = async function() {
    return this.storage.set(this.values);
  };
}
