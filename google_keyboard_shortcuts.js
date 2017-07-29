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
          navigateKey: 'return, space',
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

const getNextIndex = (currentIndex, numResults, shouldWrap) => {
  if (currentIndex < numResults - 1) {
    return currentIndex + 1;
  }
  if (!shouldWrap) {
    return currentIndex;
  }
  return 0;
};

const getPreviousIndex = (currentIndex, numResults, shouldWrap) => {
  if (currentIndex > 0) {
    return currentIndex - 1;
  }
  if (!shouldWrap) {
    return currentIndex;
  }
  return numResults - 1;
};

const initPage = () => {
  let isFirstNavigation = true;
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
    let nextIndex =
        getNextIndex(resultIndex, results.length, options.wrapNavigation);
    if (!options.autoSelectFirst && isFirstNavigation) {
      nextIndex = 0;
      isFirstNavigation = false;
    }
    updateHighlightedResult(nextIndex);
    event.stopPropagation();
    event.preventDefault();
  });
  key(options.previousKey, (event) => {
    let previousIndex =
        getPreviousIndex(resultIndex, results.length, options.wrapNavigation);
    if (!options.autoSelectFirst && isFirstNavigation) {
      previousIndex = 0;
      isFirstNavigation = false;
    }
    updateHighlightedResult(previousIndex);
    event.stopPropagation();
    event.preventDefault();
  });
  key(options.navigateKey, (event) => {
    let link = results[resultIndex];
    location.href = link.href;
    event.stopPropagation();
    event.preventDefault();
  });
  key('command+return, ctrl+return', (event) => {
    let link = results[resultIndex];
    window.open(link.href);
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
