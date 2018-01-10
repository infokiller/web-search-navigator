// Based on https://developer.chrome.com/extensions/optionsV2

const flashMessage = function(message) {
  // Update status to let user know.
  let status = document.getElementById('status');
  status.textContent = message;
  setTimeout(function() {
    status.textContent = '';
  }, 3000);
};

// Saves options to chrome.storage.sync.
const saveOptions = function() {
  let values = {
    wrapNavigation: document.getElementById('wrap-navigation').checked,
    autoSelectFirst: document.getElementById('auto-select-first').checked,
    nextKey: document.getElementById('next-key').value,
    previousKey: document.getElementById('previous-key').value,
    navigatePreviousResultPage: document.getElementById('navigate-previous-result-page').value,
    navigateNextResultPage: document.getElementById('navigate-next-result-page').value,
    navigateKey: document.getElementById('navigate-key').value,
    navigateNewTabKey: document.getElementById('navigate-new-tab-key').value,
    navigateSearchTab: document.getElementById('navigate-search-tab').value,
    navigateImagesTab: document.getElementById('navigate-images-tab').value,
    navigateVideosTab: document.getElementById('navigate-videos-tab').value,
    navigateMapsTab: document.getElementById('navigate-maps-tab').value,
    navigateNewsTab: document.getElementById('navigate-news-tab').value,
    focusSearchInput: document.getElementById('focus-search-input').value
  };
  for (let key in values) {
    extension.options.sync.values[key] = values[key];
  }
  return extension.options.sync.save().then(
    () => flashMessage('Options saved.'),
    () => flashMessage('Error when saving options.')
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = function() {
  extension.options.sync.load().then(() => {
    let values = extension.options.sync.values;
    document.getElementById('wrap-navigation').checked =
      values.wrapNavigation;
    document.getElementById('auto-select-first').checked =
      values.autoSelectFirst;
    document.getElementById('next-key').value =
      values.nextKey;
    document.getElementById('previous-key').value =
      values.previousKey;
    document.getElementById('navigate-previous-result-page').value =
      values.navigatePreviousResultPage;
    document.getElementById('navigate-next-result-page').value =
      values.navigateNextResultPage;
    document.getElementById('navigate-key').value =
      values.navigateKey;
    document.getElementById('navigate-new-tab-key').value =
      values.navigateNewTabKey;
    document.getElementById('navigate-search-tab').value =
      values.navigateSearchTab;
    document.getElementById('navigate-images-tab').value =
      values.navigateImagesTab;
    document.getElementById('navigate-videos-tab').value =
      values.navigateVideosTab;
    document.getElementById('navigate-maps-tab').value =
      values.navigateMapsTab;
    document.getElementById('navigate-news-tab').value =
      values.navigateNewsTab;
    document.getElementById('focus-search-input').value =
      values.focusSearchInput;
  });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
