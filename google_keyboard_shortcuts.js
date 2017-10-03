let options;
let lastNavigation;

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
          navigatePreviousResultPage: 'left, h',
          navigateNextResultPage: 'right, l',
          navigateKey: 'return, space',
          navigateNewTabKey: 'ctrl+return, command+return, ctrl+space',
          navigateSearchTab: 'a, s',
          navigateImagesTab: 'i',
          navigateVideosTab: 'v',
          navigateMapsTab: 'm',
          navigateNewsTab: 'n',
          focusSearchInput: '/, escape'
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

const loadLastNavigation = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(
    {
      lastQueryUrl: false,
      lastFocusedIndex: 0
    },
    (items) =>{
      lastNavigation = items;
      if (chrome.runtime.lastError) {
        reject();
      } else {
        resolve();
      }
    });
  });
}
  
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

const initResultsNavigation = (results) => {
  let isFirstNavigation = true;
  let resultIndex = 0;
  const updateHighlightedResult = (newResultIndex) => {
    if (results.length > 0) {
      results[resultIndex].classList.remove('highlighted-search-result')
      resultIndex = newResultIndex;
      results[resultIndex].classList.add('highlighted-search-result')
      results[resultIndex].focus();
    }
  };
  if (options.autoSelectFirst) {
    // Highlight the first result when the page is loaded.
    updateHighlightedResult(0);
  }
  loadLastNavigation().then(() => {
    if (location.href === lastNavigation.lastQueryUrl) {
      isFirstNavigation = false;
      updateHighlightedResult(lastNavigation.lastFocusedIndex);
    }
  });
  key(options.nextKey, (event) => {
    let nextIndex =
        getNextIndex(resultIndex, results.length, options.wrapNavigation);
    if (!options.autoSelectFirst && isFirstNavigation) {
      nextIndex = 0;
      isFirstNavigation = false;
    }
    updateHighlightedResult(nextIndex);
    handleEvent(event);
  });
  key(options.previousKey, (event) => {
    let previousIndex =
        getPreviousIndex(resultIndex, results.length, options.wrapNavigation);
    if (!options.autoSelectFirst && isFirstNavigation) {
      previousIndex = 0;
      isFirstNavigation = false;
    }
    updateHighlightedResult(previousIndex);
    handleEvent(event);
  });
  key(options.navigateKey, (event) => {
    let link = results[resultIndex];
    saveLastNavigation(resultIndex);
    link.click();
    handleEvent(event);
  });
  key(options.navigateNewTabKey, (event) => {
    let link = results[resultIndex];
    window.open(link.href);
    handleEvent(event);
  });
};

const initCommonGoogleSearchNavigation = () => {
  let searchInput = document.getElementById('lst-ib');
  key(options.focusSearchInput, (event) => {
    searchInput.focus();
    searchInput.select();
    handleEvent(event);
  });
  let all = getElementByXpath(
      '//a[contains(@class, \'q qs\') and not (contains(@href, \'&tbm=\')) and not (contains(@href, \'maps.google.\'))]');
  key(options.navigateSearchTab, (event) => {
    updateUrlWithNodeHrefAndHandleEvent(all, event);
  });
  let images = getElementByXpath(
      '//a[contains(@class, \'q qs\') and (contains(@href, \'&tbm=isch\'))]');
  key(options.navigateImagesTab, (event) => {
    updateUrlWithNodeHrefAndHandleEvent(images, event);
  });
  let videos = getElementByXpath(
      '//a[contains(@class, \'q qs\') and (contains(@href, \'&tbm=vid\'))]');
  key(options.navigateVideosTab, (event) => {
    updateUrlWithNodeHrefAndHandleEvent(videos, event);
  });
  let maps = getElementByXpath(
      '//a[contains(@class, \'q qs\') and (contains(@href, \'maps.google.\'))]');
  key(options.navigateMapsTab, (event) => {
    updateUrlWithNodeHrefAndHandleEvent(maps, event);
  });
  let news = getElementByXpath(
      '//a[contains(@class, \'q qs\') and (contains(@href, \'&tbm=nws\'))]');
  key(options.navigateNewsTab, (event) => {
    updateUrlWithNodeHrefAndHandleEvent(news, event);
  });
  let previousResultPage = document.querySelector('#pnprev');
  key(options.navigatePreviousResultPage, (event) => {
    updateUrlWithNodeHrefAndHandleEvent(previousResultPage, event);
  });
  let nextResultPage = document.querySelector('#pnnext');
  key(options.navigateNextResultPage, (event) => {
    updateUrlWithNodeHrefAndHandleEvent(nextResultPage, event);
  });
};

const updateUrlWithNodeHrefAndHandleEvent = (node, event) => {
  if (node !== null) {
    location.href = node.href;
  }
  handleEvent(event);
};

const handleEvent = (event) => {
  if (event !== null) {
    event.stopPropagation();
    event.preventDefault();
  }
};

const getQueryStringParams = () => {
  const encodedQueryString = window.location.search.slice(1);
  const encodedParams = encodedQueryString.split('&');
  let params = {};
  for (const encodedParam of encodedParams) {
    let [key, encodedValue] = encodedParam.split('=');
    if (!encodedValue) {
      encodedValue = '';
    }
    // + (plus sign) is not decoded by decodeURIComponent so we need to decode
    // it manually.
    encodedValue = encodedValue.replace(/\+/g, ' ');
    params[key] = decodeURIComponent(encodedValue);
  }
  return params;
};

const getGoogleSearchLinks = function() {
  let results = Array.prototype.slice.call(document.querySelectorAll('h3.r a'));
  let prevPage = document.querySelector('#pnprev');
  if (prevPage !== null) {
    results.push(prevPage);
  }
  let nextPage = document.querySelector('#pnnext');
  if (nextPage !== null) {
    results.push(nextPage);
  }
  return results;
};

const initGoogleSearch = function() {
  const params = getQueryStringParams();
  // Don't initialize results navigation on image search, since it doesn't work
  // there.
  if (params['tbm'] !== 'isch') {
    // This file is loaded only after the DOM is ready, so no need to wait for
    // DOMContentLoaded.
    loadOptions().then(() => {
      initResultsNavigation(getGoogleSearchLinks());
    });
  }
  loadOptions().then(() => {
    initCommonGoogleSearchNavigation();
  });
};

const initPageIfNeeded = () => {
  if (/^(www|encrypted)\.google\./.test(window.location.hostname)) {
    initGoogleSearch();
  }
};

function getElementByXpath(path) {
  return document
      .evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
      .singleNodeValue;
};

const saveLastNavigation = (visitedIndex) => {
  chrome.storage.local.set(
      {
        lastQueryUrl: location.href,
        lastFocusedIndex: visitedIndex
      }, 
      null);
}

initPageIfNeeded();

