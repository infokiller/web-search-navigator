// Based on https://developer.chrome.com/extensions/optionsV2

/* global keybindingStringToArray, keybindingArrayToString */
/* global createSyncedOptions, DEFAULT_CSS */

const GOOGLE_DOMAINS = [
  'ad', 'ae', 'al', 'am', 'as', 'at', 'az', 'ba', 'be', 'bf', 'bg', 'bi', 'bj',
  'bs', 'bt', 'by', 'ca', 'cat', 'cd', 'cf', 'cg', 'ch', 'ci', 'cl', 'cm', 'cn',
  'co.ao', 'co.bw', 'co.ck', 'co.cr', 'co.id', 'co.il', 'co.in', 'co.jp',
  'co.ke', 'co.kr', 'co.ls', 'co.ma', 'co.mz', 'co.nz', 'co.th', 'co.tz',
  'co.ug', 'co.uk', 'co.uz', 'co.ve', 'co.vi', 'co.za', 'co.zm', 'co.zw', 'com',
  'com.af', 'com.ag', 'com.ai', 'com.ar', 'com.au', 'com.bd', 'com.bh',
  'com.bn', 'com.bo', 'com.br', 'com.bz', 'com.co', 'com.cu', 'com.cy',
  'com.do', 'com.ec', 'com.eg', 'com.et', 'com.fj', 'com.gh', 'com.gi',
  'com.gt', 'com.hk', 'com.jm', 'com.kh', 'com.kw', 'com.lb', 'com.ly',
  'com.mm', 'com.mt', 'com.mx', 'com.my', 'com.na', 'com.nf', 'com.ng',
  'com.ni', 'com.np', 'com.om', 'com.pa', 'com.pe', 'com.pg', 'com.ph',
  'com.pk', 'com.pr', 'com.py', 'com.qa', 'com.sa', 'com.sb', 'com.sg',
  'com.sl', 'com.sv', 'com.tj', 'com.tr', 'com.tw', 'com.ua', 'com.uy',
  'com.vc', 'com.vn', 'cv', 'cz', 'de', 'dj', 'dk', 'dm', 'dz', 'ee', 'es',
  'fi', 'fm', 'fr', 'ga', 'ge', 'gg', 'gl', 'gm', 'gp', 'gr', 'gy', 'hn', 'hr',
  'ht', 'hu', 'ie', 'im', 'iq', 'is', 'it', 'je', 'jo', 'kg', 'ki', 'kz', 'la',
  'li', 'lk', 'lt', 'lu', 'lv', 'md', 'me', 'mg', 'mk', 'ml', 'mn', 'ms', 'mu',
  'mv', 'mw', 'ne', 'nl', 'no', 'nr', 'nu', 'pl', 'pn', 'ps', 'pt', 'ro', 'rs',
  'ru', 'rw', 'sc', 'se', 'sh', 'si', 'sk', 'sm', 'sn', 'so', 'sr', 'st', 'td',
  'tg', 'tk', 'tl', 'tm', 'tn', 'to', 'tt', 'vg', 'vu', 'ws',
];

const AMAZON_DOMAINS = [
  'ca',
  'cn',
  'co.jp',
  'co.uk',
  'com',
  'com.au',
  'com.br',
  'com.mx',
  'de',
  'es',
  'fr',
  'in',
  'it',
  'nl',
];

const generateURLPatterns = (prefix, domains, suffix) => {
  const urls = [];
  for (const domain of domains) {
    urls.push(`${prefix}.${domain}${suffix}`);
  }
  return urls;
};

// Authorized urls for compatible search engines
const OPTIONAL_PERMISSIONS_URLS = {
  'brave-search': ['https://search.brave.com/*'],
  'startpage': [
    // It used to be 'https://www.startpage.com/*/*search*' but when requesting
    // this URL chrome actually grants permission to the URL below. This
    // discrepancy causes the options page to think that we don't have
    // permission for startpage.
    'https://www.startpage.com/*',
    'https://startpage.com/*',
  ],
  'youtube': ['https://www.youtube.com/*'],
  'google-scholar': generateURLPatterns(
      'https://scholar.google',
      GOOGLE_DOMAINS,
      '/*',
  ),
  'github': ['https://github.com/*'],
  'amazon': generateURLPatterns('https://www.amazon', AMAZON_DOMAINS, '/*'),
};

const KEYBINDING_TO_DIV = {
  nextKey: 'next-key',
  previousKey: 'previous-key',
  navigatePreviousResultPage: 'navigate-previous-result-page',
  navigateNextResultPage: 'navigate-next-result-page',
  navigateKey: 'navigate-key',
  navigateNewTabKey: 'navigate-new-tab-key',
  navigateNewTabBackgroundKey: 'navigate-new-tab-background-key',
  navigateSearchTab: 'navigate-search-tab',
  navigateImagesTab: 'navigate-images-tab',
  navigateVideosTab: 'navigate-videos-tab',
  navigateMapsTab: 'navigate-maps-tab',
  navigateNewsTab: 'navigate-news-tab',
  navigateShoppingTab: 'navigate-shopping-tab',
  navigateBooksTab: 'navigate-books-tab',
  navigateFlightsTab: 'navigate-flights-tab',
  navigateFinancialTab: 'navigate-financial-tab',
  focusSearchInput: 'focus-search-input',
  navigateShowAll: 'navigate-show-all',
  navigateShowHour: 'navigate-show-hour',
  navigateShowDay: 'navigate-show-day',
  navigateShowWeek: 'navigate-show-week',
  navigateShowMonth: 'navigate-show-month',
  navigateShowYear: 'navigate-show-year',
  toggleSort: 'toggle-sort',
  toggleVerbatimSearch: 'toggle-verbatim-search',
  showImagesLarge: 'show-images-large',
  showImagesMedium: 'show-images-medium',
  showImagesIcon: 'show-images-icon',
};

/**
 * Add other search engines domain on user input
 * @param {Element} checkbox
 */
const setSearchEnginePermission_ = async (checkbox) => {
  const urls = OPTIONAL_PERMISSIONS_URLS[checkbox.id];
  if (checkbox.checked) {
    checkbox.checked = false;
    const granted = await browser.permissions.request({origins: urls});
    checkbox.checked = granted;
  } else {
    browser.permissions.remove({origins: urls});
  }
};

class OptionsPageManager {
  async init() {
    await this.loadOptions();
    const braveSearch = document.getElementById('brave-search');
    braveSearch.addEventListener('change', () => {
      setSearchEnginePermission_(braveSearch);
    });
    const startpage = document.getElementById('startpage');
    startpage.addEventListener('change', () => {
      setSearchEnginePermission_(startpage);
    });
    const youtube = document.getElementById('youtube');
    youtube.addEventListener('change', () => {
      setSearchEnginePermission_(youtube);
    });
    const googleScholar = document.getElementById('google-scholar');
    googleScholar.addEventListener('change', () => {
      setSearchEnginePermission_(googleScholar);
    });
    const github = document.getElementById('github');
    github.addEventListener('change', () => {
      setSearchEnginePermission_(github);
    });
    const amazon = document.getElementById('amazon');
    amazon.addEventListener('change', () => {
      setSearchEnginePermission_(amazon);
    });
    // NOTE: this.saveOptions and this.resetToDefaults cannot be passed directly
    // or otherwise `this` won't be bound to the object.
    document.getElementById('save').addEventListener('click', () => {
      this.saveOptions();
    });
    document.getElementById('reset').addEventListener('click', () => {
      this.resetToDefaults();
    });
  }

  // Saves options from the DOM to browser.storage.sync.
  async saveOptions() {
    const getOpt = (key) => {
      return this.options.get(key);
    };
    const setOpt = (key, value) => {
      this.options.set(key, value);
    };
    // Handle non-keybindings settings first
    setOpt(
        'wrapNavigation',
        document.getElementById('wrap-navigation').checked,
    );
    setOpt(
        'autoSelectFirst',
        document.getElementById('auto-select-first').checked,
    );
    setOpt('hideOutline', document.getElementById('hide-outline').checked);
    setOpt('delay', document.getElementById('delay').value);
    setOpt(
        'googleIncludeCards',
        document.getElementById('google-include-cards').checked,
    );
    setOpt(
        'googleIncludeMemex',
        document.getElementById('google-include-memex').checked,
    );
    setOpt(
        'googleIncludePlaces',
        document.getElementById('google-include-places').checked,
    );
    // Handle keybinding options
    for (const [key, optName] of Object.entries(KEYBINDING_TO_DIV)) {
      // Keybindings are stored internally as arrays, but edited by users as
      // comman delimited strings.
      setOpt(
          key,
          keybindingStringToArray(document.getElementById(optName).value),
      );
    }
    const customCSS = document.getElementById('custom-css-textarea').value;
    if (getOpt('customCSS') !== DEFAULT_CSS || customCSS !== DEFAULT_CSS) {
      if (customCSS.trim()) {
        setOpt('customCSS', customCSS);
      } else {
        setOpt('customCSS', DEFAULT_CSS);
      }
    }
    try {
      await this.options.save();
      this.flashMessage('Options saved');
    } catch (e) {
      this.flashMessage('Error when saving options');
    }
  }

  loadSearchEnginePermissions_(permissions) {
    // Check what URLs we have permission for.
    const braveSearch = document.getElementById('brave-search');
    braveSearch.checked = OPTIONAL_PERMISSIONS_URLS['brave-search'].every(
        (url) => {
          return permissions.origins.includes(url);
        },
    );
    const startpage = document.getElementById('startpage');
    startpage.checked = OPTIONAL_PERMISSIONS_URLS['startpage'].every((url) => {
      return permissions.origins.includes(url);
    });
    const youtube = document.getElementById('youtube');
    youtube.checked = OPTIONAL_PERMISSIONS_URLS['youtube'].every((url) => {
      return permissions.origins.includes(url);
    });
    const googleScholar = document.getElementById('google-scholar');
    googleScholar.checked = OPTIONAL_PERMISSIONS_URLS['google-scholar'].every(
        (url) => {
          return permissions.origins.includes(url);
        },
    );
    const amazon = document.getElementById('amazon');
    amazon.checked = OPTIONAL_PERMISSIONS_URLS['amazon'].every((url) => {
      return permissions.origins.includes(url);
    });
    const github = document.getElementById('github');
    github.checked = OPTIONAL_PERMISSIONS_URLS['github'].every((url) => {
      return permissions.origins.includes(url);
    });
  }

  // Load options from browser.storage.sync to the DOM.
  async loadOptions() {
    this.options = createSyncedOptions();
    const [, permissions] = await Promise.all([
      this.options.load(),
      browser.permissions.getAll(),
    ]);
    this.loadSearchEnginePermissions_(permissions);
    const getOpt = (key) => {
      return this.options.get(key);
    };
    // Handle checks separately.
    document.getElementById('wrap-navigation').checked =
      getOpt('wrapNavigation');
    document.getElementById('auto-select-first').checked =
      getOpt('autoSelectFirst');
    document.getElementById('hide-outline').checked = getOpt('hideOutline');
    document.getElementById('delay').value = getOpt('delay');
    document.getElementById('google-include-cards').checked =
      getOpt('googleIncludeCards');
    document.getElementById('google-include-memex').checked =
      getOpt('googleIncludeMemex');
    document.getElementById('google-include-places').checked = getOpt(
        'googleIncludePlaces',
    );
    // Restore options from divs.
    for (const [key, optName] of Object.entries(KEYBINDING_TO_DIV)) {
      // Keybindings are stored internally as arrays, but edited by users as
      // comman delimited strings.
      document.getElementById(optName).value = keybindingArrayToString(
          getOpt(key),
      );
    }
    // Load custom CSS
    document.getElementById('custom-css-textarea').value = getOpt('customCSS');
  }

  async resetToDefaults() {
    try {
      await this.options.clear();
      await this.loadOptions();
      this.flashMessage('Options set to defaults');
    } catch (e) {
      this.flashMessage('Error when setting options to defaults');
    }
  }

  flashMessage(message) {
    // Update status to let user know.
    const status = document.getElementById('status');
    status.textContent = message;
    setTimeout(() => {
      status.textContent = '';
    }, 3000);
  }
}

const manager = new OptionsPageManager();
// NOTE: manager.init cannot be passed directly or otherwise `this` won't be
// bound to the object.
document.addEventListener('DOMContentLoaded', () => {
  manager.init();
});
