let shouldWrap = false;

const toggleResultHighlighting = (link) => {
  link.classList.toggle('highlighted-search-result')
};

const addEventListeners = () => {
  let resultIndex = 0;
  let results = document.querySelectorAll('h3.r a');
  const updateHighlightedResult = (newResultIndex) => {
    results[resultIndex].classList.remove('highlighted-search-result')
    resultIndex = newResultIndex;
    results[resultIndex].classList.add('highlighted-search-result')
    results[resultIndex].focus();
  };
  // Highlight the first result when the page is loaded.
  updateHighlightedResult(0);
  key('down, j', (event) => {
    let newIndex = resultIndex + 1;
    if (newIndex == results.length) {
      if (shouldWrap) {
        newIndex = 0;
      } else {
        newIndex = resultIndex;
      }
    }
    updateHighlightedResult(newIndex);
    event.stopPropagation();
    event.preventDefault();
  });
  key('up, k', (event) => {
    let newIndex = resultIndex - 1;
    if (newIndex == -1) {
      if (shouldWrap) {
        newIndex = results.length - 1;
      } else {
        newIndex = resultIndex;
      }
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
addEventListeners();
