// Based on https://developer.chrome.com/extensions/optionsV2

// Saves options to chrome.storage.sync.
const saveOptions = () => {
  chrome.storage.sync.set(
      {
        wrapNavigation: document.getElementById('wrap-navigation').checked,
        autoSelectFirst: document.getElementById('auto-select-first').checked,
        nextKey: document.getElementById('next-key').value,
        previousKey: document.getElementById('previous-key').value,
        navigatePreviousResultPage:
            document.getElementById('navigate-previous-result-page').value,
        navigateNextResultPage:
            document.getElementById('navigate-next-result-page').value,
        navigateKey: document.getElementById('navigate-key').value,
        navigateNewTabKey:
            document.getElementById('navigate-new-tab-key').value,
        navigateSearchTab: 
            document.getElementById('navigate-search-tab').value,
        navigateImagesTab: 
            document.getElementById('navigate-images-tab').value,
        navigateVideosTab: 
            document.getElementById('navigate-videos-tab').value,
        navigateMapsTab: 
            document.getElementById('navigate-maps-tab').value,
        navigateNewsTab: 
            document.getElementById('navigate-news-tab').value,
      },
      () => {
        // Update status to let user know options were saved.
        let status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
          status.textContent = '';
        }, 3000);
      });
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
      {
        wrapNavigation: false,
        autoSelectFirst: true,
        nextKey: 'down, j',
        previousKey: 'up, k',
        navigatePreviousResultPage: 'left, h',
        navigateNextResultPage: 'right, l',
        navigateKey: 'return, space',
        navigateNewTabKey: 'ctrl+return, command+return, ctrl+space',
        navigateSearchTab: 'a, s',
        navigateImagesTab: 'i',
        navigateVideosTab: 'v',
        navigateMapsTab: 'm',
        navigateNewsTab: 'n'
      },
      (items) => {
        document.getElementById('wrap-navigation').checked =
            items.wrapNavigation;
        document.getElementById('auto-select-first').checked =
            items.autoSelectFirst;
        document.getElementById('next-key').value = items.nextKey;
        document.getElementById('previous-key').value = items.previousKey;
        document.getElementById('navigate-previous-result-page').value =
            items.navigatePreviousResultPage;
        document.getElementById('navigate-next-result-page').value =
            items.navigateNextResultPage;
        document.getElementById('navigate-key').value = items.navigateKey;
        document.getElementById('navigate-new-tab-key').value =
            items.navigateNewTabKey;
        document.getElementById('navigate-search-tab').value =
            items.navigateSearchTab;
        document.getElementById('navigate-images-tab').value =
            items.navigateImagesTab;
        document.getElementById('navigate-videos-tab').value =
            items.navigateVideosTab;
        document.getElementById('navigate-maps-tab').value =
            items.navigateMapsTab;
        document.getElementById('navigate-news-tab').value =
            items.navigateNewsTab;
      });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
