const DEFAULT_CSS = `/* NOTE:
 *
 * - Using !important is needed for some styles because otherwise they get
 *   overriden by the search engine stylesheets
 * - Using outline works better than border sometimes because creating the
 *   border can move other elements, for example the page numbers are moved in
 *   Google Scholar when highlighting the prev/next buttons.
 */

:root {
  --result-outline: 1px solid black;
}

@media (prefers-color-scheme: dark) {
  :root {
    --result-outline: 1px solid #aaaaaa;
  }
}

html[dark], [dark] {
  --result-outline: 1px solid #aaaaaa;
}

.wsn-google-focused-link {
    position: relative;
    /* This is required for the arrow to appear when navigating sub-results, see
     * also: https://github.com/infokiller/web-search-navigator/issues/357 */
    overflow: visible !important;
}

.wsn-google-focused-link::before,
.wsn-google-focused-map::before,
.wsn-gitlab-focused-link::before,
.wsn-brave-search-focused-link::before,
.wsn-startpage-focused-link::before {
    content: "\u25BA";
    margin-right: 25px;
    left: -25px;
    position: absolute;
}

.wsn-brave-search-focused-news {
  position: relative;
}

.wsn-brave-search-focused-news::before {
  content: "\u25BA";
  top: 5px;
  left: -45px;
  position: absolute;
}

.wsn-google-focused-image {
    outline: var(--result-outline) !important;
    /* Images are less visible with a thin outline */
    outline-width: 2px;
}

.wsn-google-focused-card,
.wsn-brave-search-focused-card,
.wsn-google-focused-job-card {
    border: var(--result-outline) !important;
}

.wsn-google-focused-map,
.wsn-google-card-item,
.wsn-gitlab-focused-group-row {
    outline: var(--result-outline) !important;
}

.wsn-google-focused-memex-result {
    border: var(--result-outline) !important;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

/* Startpage has dark themes where a black outline won't be visible */
.wsn-startpage-focused-link {
    outline: 1px solid #435a69 !important;
    outline-offset: 3px;
    position: relative;
}

.wsn-youtube-focused-video {
    outline: var(--result-outline) !important;
    outline-offset: 1px;
}

.wsn-youtube-focused-grid-video {
    border: var(--result-outline) !important;
}

.wsn-google-scholar-next-page {
    /* Using outline works better than border for the Scholar previous/next
     * buttons because border moves the page numbers a bit. */
    outline: var(--result-outline) !important;
}

.wsn-amazon-focused-item {
    outline: var(--result-outline) !important;
    outline-offset: 3px;
}

.wsn-amazon-focused-cart-item,
.wsn-amazon-focused-carousel-item {
    border: var(--result-outline) !important;
}

.wsn-github-focused-item,
.wsn-github-focused-pagination {
    outline: var(--result-outline) !important;
    outline-offset: 2px;
}

/* This rule is only used when the "hide outline" option is enabled, and is used
 * to disable the website's default search result outlining */
.wsn-no-outline,
.wsn-no-outline:focus {
    outline: none;
}`;

const DEFAULT_KEYBINDINGS = {
  nextKey: ['down', 'j'],
  previousKey: ['up', 'k'],
  navigatePreviousResultPage: ['left', 'h'],
  navigateNextResultPage: ['right', 'l'],
  navigateKey: ['return', 'space'],
  navigateNewTabBackgroundKey: ['ctrl+return', 'command+return', 'ctrl+space'],
  navigateNewTabKey: [
    'ctrl+shift+return',
    'command+shift+return',
    'ctrl+shift+space',
  ],
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
  navigateShowAll: ['z z'],
  navigateShowHour: ['z h'],
  navigateShowDay: ['z d'],
  navigateShowWeek: ['z w'],
  navigateShowMonth: ['z m'],
  navigateShowYear: ['z y'],
  toggleSort: ['z s'],
  toggleVerbatimSearch: ['z v'],
  showImagesLarge: ['z l'],
  showImagesMedium: ['z e'],
  showImagesIcon: ['z i'],
  copyUrlKey: [],
};

const DEFAULT_OPTIONS = {
  ...DEFAULT_KEYBINDINGS,
  wrapNavigation: false,
  autoSelectFirst: true,
  hideOutline: false,
  delay: 0,
  googleIncludeCards: true,
  googleIncludeMemex: false,
  googleIncludePlaces: true,
  customCSS: DEFAULT_CSS,
  simulateMiddleClick: false,
  customGitlabUrl: '^https://(www.)?\\.*git.*\\.',
};

const keybindingStringToArray = (kb) => {
  // Alternative: kb.split(/, */);
  return kb.split(',').map((t) => t.trim());
};

// eslint-disable-next-line no-unused-vars
const keybindingArrayToString = (kb) => {
  return kb.join(', ');
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
    this.values = {};
    this.defaultValues = defaultValues;
  }
  load() {
    // this.storage.get(null) returns all the data stored:
    // https://developer.chrome.com/extensions/storage#method-StorageArea-get
    return this.storage.get(null).then((values) => {
      this.values = values;
      // Prior to versions 0.4.* the keybindings were stored as strings, so we
      // migrate them to arrays if needed.
      let migrated = false;
      for (const [key, value] of Object.entries(this.values)) {
        if (!(key in DEFAULT_KEYBINDINGS) || Array.isArray(value)) {
          continue;
        }
        migrated = true;
        this.values[key] = keybindingStringToArray(value);
      }
      if (migrated) {
        return this.save();
      }
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
  return new BrowserStorage(browser.storage.sync, DEFAULT_OPTIONS);
};

// eslint-disable-next-line no-unused-vars
class ExtensionOptions {
  constructor() {
    this.sync = createSyncedOptions();
    this.local = new BrowserStorage(browser.storage.local, {
      lastQueryUrl: null,
      lastFocusedIndex: 0,
    });
  }

  load() {
    return Promise.all([this.local.load(), this.sync.load()]);
  }
}
