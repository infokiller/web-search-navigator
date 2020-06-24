const DEFAULT_CSS = `/* NOTE:
 *
 * - Using !important is needed for some styles because otherwise they get
 *   overriden by the search engine stylesheets
 * - Using outline works better than border sometimes because creating the
 *   border can move other elements, for example the page numbers are moved in
 *   Google Scholar when highlighting the prev/next buttons.
 */

.wsn-google-focused-link::before,
.wsn-startpage-focused-link::before {
    content: "\u25BA";
    margin-right: 25px;
    left: -25px;
    position: absolute;
}

.wsn-google-focused-image {
    /* Images are less visible with a thin outline, so we use 2px here */
    outline: 2px solid black !important;
}

.wsn-google-focused-card {
    border: 1px solid black !important;
}

/* Startpage has dark themes where a black outline won't be visible */
.wsn-startpage-focused-link {
    outline: 1px solid #435a69 !important;
    outline-offset: 3px;
}

.wsn-youtube-focused-video {
    outline: 1px solid black !important;
    outline-offset: 1px;
}

.wsn-youtube-focused-grid-video {
    border: 1px solid black !important;
}

.wsn-google-scholar-next-page {
    /* Using outline works better than border for the Scholar previous/next
     * buttons because border moves the page numbers a bit. */
    outline: 1px solid black !important;
}

.wsn-amazon-focused-item {
    outline: 1px solid black !important;
    outline-offset: 3px;
}

.wsn-amazon-focused-cart-item,
.wsn-amazon-focused-carousel-item {
    border: 1px solid black !important;
}

/* This rule is only used when the "hide outline" option is enabled, and is used
 * to disable the website's default search result outlining */
.wsn-no-outline,
.wsn-no-outline:focus {
    outline: none;
}`;

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
  toggleVerbatimSearch: ['z v', 'ctrl+shift+v', 'command+shift+v'],
  customCSS: DEFAULT_CSS,
};

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
          this.values = values;
        }
        resolve();
      });
    });
  }
  save() {
    return this.storage.set(this.values);
  }
  get(key) {
    const value = this.values[key];
    if (value != null) {
      return value;
    }
    return this.defaultValues[key];
  }
  set(key, value) {
    this.values[key] = value;
  }
  clear() {
    return this.storage.clear().then(() => {
      this.values = {};
    });
  }
  getAll() {
    // Merge options from storage with defaults.
    return {...this.defaultValues, ...this.values};
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
