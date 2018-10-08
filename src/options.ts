// Based on https://developer.chrome.com/extensions/optionsV2
import {extensionData} from './extension';

const getRequiredInput = (id: string): HTMLInputElement => {
  return document.getElementById(id) as HTMLInputElement;
};

const flashMessage = (message: string) => {
  // Update status to let user know.
  const status = getRequiredInput('status');
  status.textContent = message;
  setTimeout(() => {
    status.textContent = '';
  }, 3000);
};

// Saves options to chrome.storage.sync.
const saveOptions = () => {
  const values = {
    wrapNavigation: getRequiredInput('wrap-navigation').checked,
    autoSelectFirst: getRequiredInput('auto-select-first').checked,
    nextKey: getRequiredInput('next-key').value,
    previousKey: getRequiredInput('previous-key').value,
    navigatePreviousResultPage:
        getRequiredInput('navigate-previous-result-page').value,
    navigateNextResultPage: getRequiredInput('navigate-next-result-page').value,
    navigateKey: getRequiredInput('navigate-key').value,
    navigateNewTabKey: getRequiredInput('navigate-new-tab-key').value,
    navigateNewTabBackgroundKey:
        getRequiredInput('navigate-new-tab-background-key').value,
    navigateSearchTab: getRequiredInput('navigate-search-tab').value,
    navigateImagesTab: getRequiredInput('navigate-images-tab').value,
    navigateVideosTab: getRequiredInput('navigate-videos-tab').value,
    navigateMapsTab: getRequiredInput('navigate-maps-tab').value,
    navigateNewsTab: getRequiredInput('navigate-news-tab').value,
    navigateShoppingTab: getRequiredInput('navigate-shopping-tab').value,
    navigateBooksTab: getRequiredInput('navigate-books-tab').value,
    navigateFlightsTab: getRequiredInput('navigate-flights-tab').value,
    navigateFinancialTab: getRequiredInput('navigate-financial-tab').value,
    focusSearchInput: getRequiredInput('focus-search-input').value,
    navigateShowAll: getRequiredInput('navigate-show-all').value,
    navigateShowHour: getRequiredInput('navigate-show-hour').value,
    navigateShowDay: getRequiredInput('navigate-show-day').value,
    navigateShowWeek: getRequiredInput('navigate-show-week').value,
    navigateShowMonth: getRequiredInput('navigate-show-month').value,
    navigateShowYear: getRequiredInput('navigate-show-year').value,
    toggleSort: getRequiredInput('toggle-sort').value
  };
  for (const [key, value] of Object.entries(values)) {
    extensionData.options.values[key] = value;
  }
  return extensionData.options.save().then(
      () => flashMessage('Options saved.'),
      () => flashMessage('Error when saving options.'));
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  extensionData.options.load().then(() => {
    const values = extensionData.options.values;
    getRequiredInput('wrap-navigation').checked = values.wrapNavigation;
    getRequiredInput('auto-select-first').checked = values.autoSelectFirst;
    getRequiredInput('next-key').value = values.nextKey;
    getRequiredInput('previous-key').value = values.previousKey;
    getRequiredInput('navigate-previous-result-page').value =
        values.navigatePreviousResultPage;
    getRequiredInput('navigate-next-result-page').value =
        values.navigateNextResultPage;
    getRequiredInput('navigate-key').value = values.navigateKey;
    getRequiredInput('navigate-new-tab-key').value = values.navigateNewTabKey;
    getRequiredInput('navigate-new-tab-background-key').value =
        values.navigateNewTabBackgroundKey;
    getRequiredInput('navigate-search-tab').value = values.navigateSearchTab;
    getRequiredInput('navigate-images-tab').value = values.navigateImagesTab;
    getRequiredInput('navigate-videos-tab').value = values.navigateVideosTab;
    getRequiredInput('navigate-maps-tab').value = values.navigateMapsTab;
    getRequiredInput('navigate-news-tab').value = values.navigateNewsTab;
    getRequiredInput('navigate-shopping-tab').value =
        values.navigateShoppingTab;
    getRequiredInput('navigate-books-tab').value = values.navigateBooksTab;
    getRequiredInput('navigate-flights-tab').value = values.navigateFlightsTab;
    getRequiredInput('navigate-financial-tab').value =
        values.navigateFinancialTab;
    getRequiredInput('focus-search-input').value = values.focusSearchInput;
    getRequiredInput('navigate-show-all').value = values.navigateShowAll;
    getRequiredInput('navigate-show-hour').value = values.navigateShowHour;
    getRequiredInput('navigate-show-day').value = values.navigateShowDay;
    getRequiredInput('navigate-show-week').value = values.navigateShowWeek;
    getRequiredInput('navigate-show-month').value = values.navigateShowMonth;
    getRequiredInput('navigate-show-year').value = values.navigateShowYear;
    getRequiredInput('toggle-sort').value = values.toggleSort;
  });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
getRequiredInput('save').addEventListener('click', saveOptions);
