// Based on https://developer.chrome.com/extensions/optionsV2

// Saves options to chrome.storage.sync.
const saveOptions = () => {
  chrome.storage.sync.set(
      {
        wrapNavigation: document.getElementById('wrap-navigation').checked,
        autoSelectFirst: document.getElementById('auto-select-first').checked,
        nextKey: document.getElementById('next-key').value,
        previousKey: document.getElementById('previous-key').value,
        navigateKey: document.getElementById('navigate-key').value,
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
        navigateKey: 'return, space',
      },
      (items) => {
        document.getElementById('wrap-navigation').checked =
            items.wrapNavigation;
        document.getElementById('auto-select-first').checked =
            items.autoSelectFirst;
        document.getElementById('next-key').value = items.nextKey;
        document.getElementById('previous-key').value = items.previousKey;
      });
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
