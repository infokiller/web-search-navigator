let options;

const toggleResultHighlighting = (link) => {
  link.classList.toggle('highlighted-search-result')
};

const loadOptions = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(
        {
          wrapNavigation: false,
          autoSelectFirst: true,
          nextKey: 'down, j',
          previousKey: 'up, k',
        },
        (items) => {
          options = items;
          if (chrome.runtime.lastError) {
            reject();
          } else {
            resolve();
          }
        });
  });
};

const initPage = () => {
  let firstNavigationDone = false;
  let resultIndex = 0;
  let results = document.querySelectorAll('h3.r a');
  const updateHighlightedResult = (newResultIndex) => {
    results[resultIndex].classList.remove('highlighted-search-result')
    resultIndex = newResultIndex;
    results[resultIndex].classList.add('highlighted-search-result')
    results[resultIndex].focus();
  };
  if (options.autoSelectFirst) {
    // Highlight the first result when the page is loaded.
    updateHighlightedResult(0);
  }
  key(options.nextKey, (event) => {
    let newIndex = resultIndex + 1;
    if (newIndex == results.length) {
      if (options.wrapNavigation) {
        newIndex = 0;
      } else {
        newIndex = resultIndex;
      }
    }
    if (!options.autoSelectFirst && !firstNavigationDone) {
      newIndex = 0;
      firstNavigationDone = true;
    }
    updateHighlightedResult(newIndex);
    event.stopPropagation();
    event.preventDefault();
  });
  key(options.previousKey, (event) => {
    let newIndex = resultIndex - 1;
    if (newIndex == -1) {
      if (options.wrapNavigation) {
        newIndex = results.length - 1;
      } else {
        newIndex = resultIndex;
      }
    }
    if (!options.autoSelectFirst && !firstNavigationDone) {
      newIndex = 0;
      firstNavigationDone = true;
    }
    updateHighlightedResult(newIndex);
    event.stopPropagation();
    event.preventDefault();
  });
  key('command+return, ctrl+return', (event) => {
    let link = results[resultIndex];
    window.open(link.attr('href'));
    event.stopPropagation();
    event.preventDefault();
  });
  key('return', (event) => {
    let link = results[resultIndex];
    location.href = link.attr('href');
    event.stopPropagation();
    event.preventDefault();
  });
  let searchInput = document.getElementById('lst-ib');
  key('/', (event) => {
    searchInput.focus();
    event.stopPropagation();
    event.preventDefault();
  });
};

// This file is loaded only after the DOM is ready, so no need to wait for
// DOMContentLoaded.
loadOptions().then(() => {
  initPage();
});
