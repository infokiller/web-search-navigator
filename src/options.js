// Based on https://developer.chrome.com/extensions/optionsV2

/**
 * Add other search engines domain on user input
 * @param {Element} checkbox
 */
const setSearchEnginePermission = async (checkbox) => {
  const urls = searchEnginesUrls[checkbox.name];
  if (checkbox.checked) {
    checkbox.checked = false;
    const granted = await browser.permissions.request(
        {permissions: ['tabs'], origins: urls});
    checkbox.checked = granted;
  } else {
    chrome.permissions.remove({origins: urls});
  }
};

const flashMessage = (message) => {
  // Update status to let user know.
  const status = document.getElementById('status');
  status.textContent = message;
  setTimeout(function() {
    status.textContent = '';
  }, 3000);
};

const divToOptionName = {
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
};

const startpage = document.getElementById('startpage');
startpage.addEventListener('change', () => {
  setSearchEnginePermission(startpage);
});

const youtube = document.getElementById('youtube');
youtube.addEventListener('change', () => {
  setSearchEnginePermission(youtube);
});

// Saves options to chrome.storage.sync.
const saveOptions = async () => {
  // handle checks separately
  extension.options.sync.values.wrapNavigation = document.getElementById(
      'wrap-navigation',
  ).checked;
  extension.options.sync.values.autoSelectFirst = document.getElementById(
      'auto-select-first',
  ).checked;
  extension.options.sync.values.hideOutline = document.getElementById(
      'hide-outline',
  ).checked;
  extension.options.sync.values.delay = document.getElementById('delay').value;
  extension.options.sync.values.searchEngines.startpage = startpage.checked;
  extension.options.sync.values.searchEngines.youtube = youtube.checked;

  // Save options from divs.
  for (const [key, optName] of Object.entries(divToOptionName)) {
    // Options take commands as strings separated by commas.
    // Split them into the arrays Moustrap requires.
    extension.options.sync.values[key] = document
        .getElementById(optName)
        .value.split(',')
        .map((t) => t.trim());
  }

  // Update the sync values and save.
  return extension.options.sync.save().then(
      () => flashMessage('Options saved.'),
      () => flashMessage('Error when saving options.'),
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = async () => {
  const [, permissions] = await Promise.all([
    extension.options.sync.load(),
    browser.permissions.getAll(),
  ]);
  // Handle checks separately.
  document.getElementById('wrap-navigation').checked =
    extension.options.sync.values.wrapNavigation;
  document.getElementById('auto-select-first').checked =
    extension.options.sync.values.autoSelectFirst;
  document.getElementById('hide-outline').checked =
    extension.options.sync.values.hideOutline;
  document.getElementById('delay').value = extension.options.sync.values.delay;
  // Restore options from divs.
  for (const [key, optName] of Object.entries(divToOptionName)) {
    // Options are stored as arrays.
    // Split them into comma-separated string for the user.
    const optTemp = extension.options.sync.values[key];
    document.getElementById(optName).value =
        Array.isArray(optTemp) ? optTemp.join(', ') : optTemp;
  }
  // Check what URLs we have permission for.
  startpage.checked = searchEnginesUrls.startpage.every((url) => {
    return permissions.origins.includes(url);
  });
  youtube.checked = searchEnginesUrls.youtube.every((url) => {
    return permissions.origins.includes(url);
  });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
