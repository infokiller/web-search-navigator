// Based on https://developer.chrome.com/extensions/optionsV2

const flashMessage = (message) => {
  // Update status to let user know.
  const status = document.getElementById('status');
  status.textContent = message;
  setTimeout(function() {
    status.textContent = '';
  }, 3000);
};

const divs = {
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
  toggleSort: 'toggle-sort'
};

// Saves options to chrome.storage.sync.
const saveOptions = () => {

  // handle checks separately
  extension.options.sync.values.wrapNavigation = document.getElementById('wrap-navigation').checked
  extension.options.sync.values.autoSelectFirst = document.getElementById('auto-select-first').checked

  // update using div lookup
  for(let key in divs) {
    // set value, must split array with ,
    extension.options.sync.values[key] =
      document.getElementById(divs[key]).value.split(',').map(t => t.trim())
  }

  // update the sync values and save
  return extension.options.sync.save().then(
    () => flashMessage('Options saved.'),
    () => flashMessage('Error when saving options.')
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  extension.options.sync.load().then(() => {

    // handle checks separately
    document.getElementById('wrap-navigation').checked = extension.options.sync.values.wrapNavigation;
    document.getElementById('auto-select-first').checked = extension.options.sync.values.autoSelectFirst;

    // update using div lookup
    for(let key in divs) {
      // set div, must join array with ,
      document.getElementById(divs[key]).value = extension.options.sync.values[key].join(', ')
    }
  });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
