/**
 * This file contains search engine specific logic via search engine objects.
 *
 * A search engine object must provide the following:
 *  - {regex} urlPattern
 *  - {CSS selector} searchBoxSelector
 *  - {SearchResult[]} getSearchResults()
 *
 * Optional functions/properties:
 *  - {Array} tabs
 *    Default: {}
 *  - {int} getTopMargin: used if top results are not entirely visible
 *    Default: 0
 *  - {int} getBottomMargin: used if bottom results are not entirely visible.
 *    Relevant for some search engines, since Firefox and Chrome show a tooltip
 *    with the URL of focused links at the bottom and can hide some of the
 *    search result at the bottom.
 *    Default: getDefaultBottomMargin()
 *  - {Function} onChangedResults: function for registering a callback on
 *    changed search results. The callback gets a single boolean parameter that
 *    is set to true if the only change is newly appended results.
 *    Default: null (meaning there's no support for such events)
 *  - {None} changeTools(period)
 *
 * Every SearchResult must provide the element and highlightClass properties and
 * optionally the following:
 *  - {Callback} anchorSelector: callback for getting the anchor
 *    Default: the element itself
 *  - {Callback} highlightedElementSelector: callback for getting the
 *    highlighted element
 *    Default: the element itself
 *  - {Callback} containerSelector: callback for getting the container that
 *    needs to be visible when an element is selected.
 *    Default: the element itself
 */

class SearchResult {
  // We must declare the private class fields.
  #element;
  #anchorSelector;
  #highlightedElementSelector;
  #containerSelector;

  /**
   * @param {Element} element
   * @param {function|null} anchorSelector
   * @param {string} highlightClass
   * @param {function|null} highlightedElementSelector
   * @param {function|null} containerSelector
   */
  constructor(
      element,
      anchorSelector,
      highlightClass,
      highlightedElementSelector,
      containerSelector,
  ) {
    this.#element = element;
    this.#anchorSelector = anchorSelector;
    this.highlightClass = highlightClass;
    this.#highlightedElementSelector = highlightedElementSelector;
    this.#containerSelector = containerSelector;
  }
  get anchor() {
    if (!this.#anchorSelector) {
      return this.#element;
    }
    return this.#anchorSelector(this.#element);
  }
  get container() {
    if (!this.#containerSelector) {
      return this.#element;
    }
    return this.#containerSelector(this.#element);
  }
  get highlightedElement() {
    if (!this.#highlightedElementSelector) {
      return this.#element;
    }
    return this.#highlightedElementSelector(this.#element);
  }
}

// eslint-disable-next-line
/**
 * @param {Array} includedSearchResults An array of
 * tuples.  Each tuple contains collection of the search results optionally
 * accompanied with their container selector.
 * @constructor
 */
const getSortedSearchResults = (
    includedSearchResults,
    excludedNodeList = [],
) => {
  const excludedResultsSet = new Set();
  for (const node of excludedNodeList) {
    excludedResultsSet.add(node);
  }
  const searchResults = [];
  for (const results of includedSearchResults) {
    for (const node of results.nodes) {
      const searchResult = new SearchResult(
          node,
          results.anchorSelector,
          results.highlightClass,
          results.highlightedElementSelector,
          results.containerSelector,
      );
      const anchor = searchResult.anchor;
      // Use offsetParent to exclude hidden elements, see:
      // https://stackoverflow.com/a/21696585/1014208
      if (
        anchor != null &&
        !excludedResultsSet.has(anchor) &&
        anchor.offsetParent !== null
      ) {
        // Prevent adding the same node multiple times.
        excludedResultsSet.add(anchor);
        searchResults.push(searchResult);
      }
    }
  }
  // Sort searchResults by their document position.
  searchResults.sort((a, b) => {
    const position = a.anchor.compareDocumentPosition(b.anchor);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
      return -1;
    } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      return 1;
    } else {
      return 0;
    }
  });
  return searchResults;
};

const getFixedSearchBoxTopMargin = (searchBoxContainer, element) => {
  // When scrolling down, the search box can have a fixed position and can hide
  // search results, so we try to compensate for it.
  if (!searchBoxContainer || searchBoxContainer.contains(element)) {
    return 0;
  }
  return searchBoxContainer.getBoundingClientRect().height;
};

// https://stackoverflow.com/a/7000222/2870889
// eslint-disable-next-line no-unused-vars
const isFirefox = () => {
  return navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
};

// eslint-disable-next-line no-unused-vars
const getDefaultBottomMargin = (element) => {
  return 28;
};

const selectorElementGetter = (selector) => {
  return () => {
    return document.querySelector(selector);
  };
};

const nParent = (element, n) => {
  while (n > 0 && element) {
    element = element.parentElement;
    n--;
  }
  return element;
};

const debounce = (callback, delayMs) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      return callback(...args);
    }, delayMs);
  };
};

class GoogleSearch {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^https:\/\/(www\.)?google\./;
  }
  get searchBoxSelector() {
    // Must match search engine search box
    // NOTE: we used '#searchform input[name=q]' before 2020-06-05 but that
    // doesn't work in the images search tab. Another option is to use
    // 'input[role="combobox"]' but this doesn't work when there's also a
    // dictionary search box.
    // return '#searchform input[name=q]',
    return 'form[role=search] [name=q]';
  }
  getTopMargin(element) {
    return getFixedSearchBoxTopMargin(
        document.querySelector('#searchform.minidiv'),
        element,
    );
  }
  getBottomMargin(element) {
    return isFirefox() ? 0 : getDefaultBottomMargin();
  }
  onChangedResults(callback) {
    if (GoogleSearch.#isImagesTab()) {
      return GoogleSearch.#onImageSearchResults(callback);
    }
    if (this.options.googleIncludeMemex) {
      return GoogleSearch.#onMemexResults(callback);
    }
    // https://github.com/infokiller/web-search-navigator/issues/464
    const container = document.querySelector('#rcnt');
    if (!container) {
      return;
    }
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          callback(true);
        }, 50),
    );
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }

  static #isImagesTab() {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('udm') === '2';
  }

  static #getImagesTabResults() {
    const includedElements = [
      // Image links
      {
        nodes: document.querySelectorAll('.islrc a[data-nav="1"]'),
        highlightClass: 'wsn-google-focused-image',
      },
      // Show more results button
      {
        nodes: document.querySelectorAll('#islmp [type="button"]'),
        highlightClass: 'wsn-google-focused-image',
      },
    ];
    return getSortedSearchResults(includedElements, []);
  }

  static #regularResults() {
    return [
      {
        nodes: document.querySelectorAll('#search .r > a:first-of-type'),
        highlightClass: 'wsn-google-focused-link',
        containerSelector: (n) => n.parentElement.parentElement,
      },
      {
        nodes: document.querySelectorAll('#search .r g-link > a:first-of-type'),
        highlightClass: 'wsn-google-focused-link',
        containerSelector: (n) => n.parentElement.parentElement,
      },
      // More results button in continous loading
      // https://imgur.com/a/X9zyJ24
      {
        nodes: document.querySelectorAll(
            '#botstuff a[href^="/search"][href*="start="] h3',
        ),
        highlightClass: 'wsn-google-focused-link',
        anchorSelector: (n) => n.closest('a'),
      },
      // Continuously loaded results are *sometimes* in the #botstuff container
      // https://imgur.com/a/s6ow0La
      {
        nodes: document.querySelectorAll('#botstuff a h3'),
        highlightClass: 'wsn-google-focused-link',
        containerSelector: (n) => nParent(n, 5),
        highlightedElementSelector: (n) => nParent(n, 5),
        anchorSelector: (n) => n.closest('a'),
      },
      // Sometimes featured snippets are not contained in #search (possibly when
      // there are large images?): https://imgur.com/a/VluRKIQ
      {
        nodes: document.querySelectorAll('.xpdopen .g a'),
        highlightClass: 'wsn-google-focused-link',
        highlightedElementSelector: (n) => n.querySelector('h3'),
      },
      // Large YouTube video as top result: https://imgur.com/a/JIe62QV
      {
        nodes: document.querySelectorAll('h3 a[href*="youtube.com"]'),
        highlightClass: 'wsn-google-focused-link',
        highlightedElementSelector: (n) => n.closest('h3'),
      },
      // Sub-results: https://imgur.com/a/CJePYJM
      {
        nodes: document.querySelectorAll('#search h3 a:first-of-type'),
        highlightClass: 'wsn-google-focused-link',
        highlightedElementSelector: (n) => n.closest('h3'),
        containerSelector: (n) => n.closest('tr'),
      },
      // Shopping results: https://imgur.com/a/wccM2iq
      {
        nodes: document.querySelectorAll('#rso a h4'),
        anchorSelector: (n) => n.closest('a'),
        highlightClass: 'wsn-google-focused-card',
        highlightedElementSelector: (n) => n.closest('.sh-dgr__content'),
      },
      // News tab: https://imgur.com/a/MR9q31f
      {
        nodes: document.querySelectorAll('#search g-card a'),
        highlightClass: 'wsn-google-focused-link',
      },
      // Jobs heading for the jobs cards section. Clicking on it takes you
      // to Google's job search.
      // As of 2023-05-28, the Google's jobs search URLs seem to contain two
      // query string params which seem relevant:
      // - ibp=htl;jobs
      // - htivrt=jobs
      // The first one matches the jobs heading, but also buttons in the
      // jobs UI such as filtering by WFH/in-office. Therefore, we use the
      // second one for specific jobs, but the first one to detect the jobs
      // heading (otherwise it would be matched later in vaccines).
      // eslint-disable-next-line max-len
      // const jobsSelector = '#search a:is([href*="ibp=htl;jobs"], [href*="htivrt=jobs"])';
      // NOTE: this must be added to the included elements before:
      // - vaccines
      // - vertical maps
      // - books and featured snippets
      // TODO: add screenshot
      {
        nodes: document.querySelectorAll(
            // eslint-disable-next-line max-len
            '#search a:is([href*="ibp=htl;jobs"],[href*="htivrt=jobs"]) [role=heading][aria-level="2"]',
        ),
        anchorSelector: (n) => n.closest('a'),
        // highlightedElementSelector: (n) => n.closest('li'),
        highlightClass: 'wsn-google-focused-job-card',
      },
      // Same as above, but for specific job results.
      // TODO: add screenshot
      // Jobs cards
      {
        // nodes: document.querySelectorAll('#search a[href*="htivrt=jobs"]'),
        // eslint-disable-next-line max-len
        nodes: document.querySelectorAll('#search li a[href*="htivrt=jobs"]'),
        highlightedElementSelector: (n) => n.closest('li'),
        highlightClass: 'wsn-google-focused-job-card',
      },
      // Books tab: https://imgur.com/a/QSBIOb6
      // NOTE: This is required for matching "features snippets" in the general
      // search tab, and also matches other results.
      {
        nodes: document.querySelectorAll('#search [data-hveid] a h3'),
        anchorSelector: (n) => n.closest('a'),
        containerSelector: (n) => n.closest('[data-hveid]'),
        highlightedElementSelector: (n) => n.closest('[data-hveid]'),
        highlightClass: 'wsn-google-focused-link',
      },
      // Next/previous results page
      {
        nodes: document.querySelectorAll('#pnprev, #pnnext'),
        highlightClass: 'wsn-google-card-item',
      },
    ];
  }

  static #cardResults() {
    const nearestChildOrSiblingOrParentAnchor = (element) => {
      const childAnchor = element.querySelector('a');
      if (childAnchor && childAnchor.href) {
        return childAnchor;
      }
      const siblingAnchor = element.parentElement.querySelector('a');
      if (siblingAnchor && siblingAnchor.href) {
        return siblingAnchor;
      }
      return element.closest('a');
    };
    const nearestCardContainer = (element) => {
      return element.closest('g-inner-card');
    };
    return [
      // Twitter: https://imgur.com/a/fdI75JG
      {
        nodes: document.querySelectorAll(
            '#search [data-init-vis=true] [role=heading]',
        ),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        highlightedElementSelector: nearestCardContainer,
        highlightClass: 'wsn-google-focused-card',
      },
      // Vertical "Top stories" results
      {
        nodes: document.querySelectorAll('#search [role=text] [role=heading]'),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        highlightClass: 'wsn-google-focused-link',
      },
      // Vertical video results: https://imgur.com/a/GyKhwrx
      // Vertical video results: https://imgur.com/a/8fbPnvT
      {
        nodes: document.querySelectorAll(
            '#search video-voyager a [role=heading]',
        ),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        containerSelector: nearestChildOrSiblingOrParentAnchor,
        highlightedElementSelector: nearestChildOrSiblingOrParentAnchor,
        highlightClass: 'wsn-google-focused-link',
      },
      // Horizontal video results: https://imgur.com/a/gRGJ7l9
      // People also search for: https://imgur.com/a/QpCHKt0
      {
        nodes: document.querySelectorAll(
            '#search g-scrolling-carousel g-inner-card a [role=heading]',
        ),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        containerSelector: nearestCardContainer,
        highlightedElementSelector: nearestCardContainer,
        highlightClass: 'wsn-google-card-item',
      },
      // Vaccines: https://imgur.com/a/325qJzE
      {
        nodes: document.querySelectorAll(
            '#search a.a-no-hover-decoration [role=heading]',
        ),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        containerSelector: nearestChildOrSiblingOrParentAnchor,
        highlightedElementSelector: nearestChildOrSiblingOrParentAnchor,
        highlightClass: 'wsn-google-focused-link',
      },
      // Things to do in X: https://imgur.com/a/ibXwiuT
      {
        nodes: document.querySelectorAll('td a [role=heading]'),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        containerSelector: (n) => n.closest('td'),
        highlightedElementSelector: (n) => n.closest('td'),
        highlightClass: 'wsn-google-card-item',
      },
      // Vertical Maps/Places: https://imgur.com/a/JXrxBCj
      // Vertical recipes: https://imgur.com/a/3r7klHk
      // Top stories grid: https://imgur.com/a/mY93YRF
      // TODO: fix the small movements in recipes item selection.
      {
        nodes: document.querySelectorAll('a [role=heading]'),
        anchorSelector: nearestChildOrSiblingOrParentAnchor,
        containerSelector: nearestChildOrSiblingOrParentAnchor,
        highlightedElementSelector: nearestChildOrSiblingOrParentAnchor,
        highlightClass: 'wsn-google-card-item',
      },
    ];
  }

  static #placesResults() {
    const nodes = document.querySelectorAll('.vk_c a');
    // The first node is usually the map image which needs to be styled
    // differently.
    let map;
    let links = nodes;
    if (nodes[0] != null && nodes[0].querySelector('img')) {
      map = nodes[0];
      links = Array.from(nodes).slice(1);
    }
    const results = [];
    if (map != null) {
      results.push({
        nodes: [map],
        highlightedElementSelector: (n) => n.parentElement,
        highlightClass: 'wsn-google-focused-map',
      });
    }
    results.push({
      nodes: links,
      highlightClass: 'wsn-google-focused-link',
    });
    return results;
  }

  static #memexResults() {
    return [
      {
        nodes: document.querySelectorAll(
            '#memexResults ._3d3zwUrsb4CVi1Li4H6CBw a',
        ),
        highlightClass: 'wsn-google-focused-memex-result',
      },
    ];
  }

  getSearchResults() {
    if (GoogleSearch.#isImagesTab()) {
      return GoogleSearch.#getImagesTabResults();
    }
    const includedElements = GoogleSearch.#regularResults();
    if (this.options.googleIncludeCards) {
      includedElements.push(...GoogleSearch.#cardResults());
    }
    if (this.options.googleIncludePlaces) {
      includedElements.push(...GoogleSearch.#placesResults());
    }
    if (this.options.googleIncludeMemex) {
      includedElements.push(...GoogleSearch.#memexResults());
    }
    const excludedElements = document.querySelectorAll(
        [
          // People also ask. Each one of the used selectors should be
          // sufficient, but we use both to be more robust to upstream DOM
          // changes.
          '.related-question-pair a',
          '#search .kp-blk:not(.c2xzTb) .r > a:first-of-type',
          // Right hand sidebar. We exclude it because it is after all the
          // results in the document order (as determined by
          // Node.DOCUMENT_POSITION_FOLLOWING used in getSortedSearchResults),
          // and it's confusing.
          '#rhs a',
        ].join(', '),
    );
    return getSortedSearchResults(includedElements, excludedElements);
  }

  static #onImageSearchResults(callback) {
    const container = document.querySelector('.islrc');
    if (!container) {
      return;
    }
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          callback(true);
        }, 50),
    );
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: false,
    });
  }

  static #onMemexResults(callback) {
    const container = document.querySelector('#rhs');
    if (!container) {
      return;
    }
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          if (document.querySelector('#memexResults') != null) {
            callback(true);
          }
        }, 50),
    );
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }

  static #imageSearchTabs() {
    const visibleTabs = document.querySelectorAll('.T47uwc > a');
    // NOTE: The order of the tabs after the first two is dependent on the
    // query. For example:
    // - "cats": videos, news, maps
    // - "trump": news, videos, maps
    // - "california": maps, news, videos
    return {
      navigateSearchTab: visibleTabs[0],
      navigateMapsTab: selectorElementGetter(
          '.T47uwc > a[href*="maps.google."]',
      ),
      navigateVideosTab: selectorElementGetter('.T47uwc > a[href*="&tbm=vid"]'),
      navigateNewsTab: selectorElementGetter('.T47uwc > a[href*="&tbm=nws"]'),
      navigateShoppingTab: selectorElementGetter(
          'a[role="menuitem"][href*="&tbm=shop"]',
      ),
      navigateBooksTab: selectorElementGetter(
          'a[role="menuitem"][href*="&tbm=bks"]',
      ),
      navigateFlightsTab: selectorElementGetter(
          'a[role="menuitem"][href*="&tbm=flm"]',
      ),
      navigateFinancialTab: selectorElementGetter(
          'a[role="menuitem"][href*="/finance?"]',
      ),
      // TODO: Disable image search's default keybindings to avoid confusing the
      // user, because the default keybindings can cause an indenepdent
      // navigation of the image results with another outline. The code below
      // doesn't work because the key event is captured by the image search
      // code, since Moustrap is bound on document, instead of a more specific
      // container. The following does work, but the code needs some changes to
      // support binding on a specific container per search engine:
      //
      // Mousetrap(document.querySelector('.islrc')).bind ...
      // Mousetrap(document.querySelector('#Sva75c')).bind ...
      //
      // navigatePreviousResultPage: null,
      // navigateNextResultPage: null,
    };
  }

  // Array storing tuples of tabs navigation keybindings and their corresponding
  // CSS selector
  get previousPageButton() {
    if (GoogleSearch.#isImagesTab()) {
      return null;
    }
    return selectorElementGetter('#pnprev');
  }

  get nextPageButton() {
    if (GoogleSearch.#isImagesTab()) {
      return null;
    }
    return selectorElementGetter('#pnnext');
  }
  get tabs() {
    if (GoogleSearch.#isImagesTab()) {
      return GoogleSearch.#imageSearchTabs();
    }
    return {
      navigateSearchTab: selectorElementGetter(
          // eslint-disable-next-line max-len
          'a[href*="/search?q="]:not([href*="&tbm="]):not([href*="maps.google."])',
      ),
      navigateImagesTab: selectorElementGetter('a[href*="&udm=2"]'),
      navigateVideosTab: selectorElementGetter('a[href*="&tbm=vid"]'),
      navigateMapsTab: selectorElementGetter('a[href*="maps.google."]'),
      navigateNewsTab: selectorElementGetter('a[href*="&tbm=nws"]'),
      navigateShoppingTab: selectorElementGetter('a[href*="&tbm=shop"]'),
      navigateBooksTab: selectorElementGetter('a[href*="&tbm=bks"]'),
      navigateFlightsTab: selectorElementGetter('a[href*="&tbm=flm"]'),
      navigateFinancialTab: selectorElementGetter('[href*="/finance?"]'),
    };
  }

  /**
   *  Filter the results based on special properties
   * @param {*} period, filter identifier. Accepted filter are :
   *  'a' : all results
   *  'h' : last hour
   *  'd' : last day
   *  'w' : last week
   *  'm' : last month
   *  'y' : last year
   *  'v' : verbatim search
   *  null : toggle sort
   */
  // TODO: Refactor this function to get enums after migrating to typescript.
  changeTools(period) {
    const searchParams = new URLSearchParams(window.location.search);
    // Use the last value of the tbs param in case there are multiple ones,
    // since the last one overrides the previous ones.
    const allTbsValues = searchParams.getAll('tbs');
    const lastTbsValue = allTbsValues[allTbsValues.length - 1] || '';
    const match = /(qdr:.|li:1)(,sbd:.)?/.exec(lastTbsValue);
    const currentPeriod = (match && match[1]) || '';
    const currentSort = (match && match[2]) || '';
    if (period === 'a') {
      searchParams.delete('tbs');
    } else if (period) {
      let newTbs = '';
      if (period === 'v') {
        if (currentPeriod === 'li:1') {
          newTbs = '';
        } else {
          newTbs = 'li:1';
        }
      } else {
        newTbs = `qdr:${period}`;
      }
      searchParams.set('tbs', `${newTbs}${currentSort}`);
      // Can't apply sort when not using period.
    } else if (currentPeriod) {
      searchParams.set(
          'tbs',
          `${currentPeriod}` + (currentSort ? '' : ',sbd:1'),
      );
    }
    const newSearchString = '?' + searchParams.toString();
    if (newSearchString !== window.location.search) {
      window.location.search = newSearchString;
    }
    return false;
  }

  changeImageSize(size) {
    const sizeOptions = {
      LARGE: {value: 0, name: 'Large', code: 'l'},
      MEDIUM: {value: 1, name: 'Medium', code: 'e'},
      ICON: {value: 2, name: 'Icon', code: 'i'},
    };
    const openTool = document.querySelector(
        '[class="PNyWAd ZXJQ7c"][jsname="I4bIT"]',
    );
    if (openTool != null) {
      openTool.click();
    }
    const openSizeDropDown = document.querySelector('[aria-label="Size"]');
    if (openSizeDropDown != null) {
      openSizeDropDown.click();
    }
    const dropDownWithSize = document.querySelector(
        '[class="xFo9P r9PaP Fmo8N"][jsname="wLFV5d"]',
    );
    const getButton = (selector) => {
      let button;
      if (document.querySelector(selector) != null) {
        button = document.querySelector(selector);
      } else {
        button = null;
      }
      return button;
    };
    const setImageSize = (dropDownWithSize, buttonSelector) => {
      let button = getButton(buttonSelector);
      if (dropDownWithSize == null && button != null) {
        button.click();
      } else if (dropDownWithSize != null && button == null) {
        dropDownWithSize.click();
        button = getButton(buttonSelector);
        button.click();
      } else if (dropDownWithSize != null && button != null) {
        button.click();
      }
    };
    switch (size) {
      case sizeOptions.LARGE.code:
        if (
          dropDownWithSize == null ||
          dropDownWithSize.getAttribute('aria-label') != sizeOptions.LARGE.name
        ) {
          setImageSize(
              dropDownWithSize,
              '[class="MfLWbb"][aria-label="Large"]',
          );
        }
        break;
      case sizeOptions.MEDIUM.code:
        if (
          dropDownWithSize == null ||
          dropDownWithSize.getAttribute('aria-label') != sizeOptions.MEDIUM.name
        ) {
          setImageSize(
              dropDownWithSize,
              '[class="MfLWbb"][aria-label="Medium"]',
          );
        }
        break;
      case sizeOptions.ICON.code:
        if (
          dropDownWithSize == null ||
          dropDownWithSize.getAttribute('aria-label') != sizeOptions.ICON.name
        ) {
          setImageSize(dropDownWithSize, '[class="MfLWbb"][aria-label="Icon"]');
        }
        break;
      default:
        break;
    }
  }
}

class BraveSearch {
  constructor(options) {
    this.options = options;
  }

  get urlPattern() {
    return /^https:\/\/search\.brave\.com/;
  }

  get searchBoxSelector() {
    return '.form-input, input[id=searchbox]';
  }

  getTopMargin(element) {
    return getFixedSearchBoxTopMargin(
        document.querySelector('header.navbar'),
        element,
    );
  }

  onChangedResults(callback) {
    const containers = document.querySelectorAll('#results');
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          callback(true);
        }, 50),
    );
    for (const container of containers) {
      observer.observe(container, {
        attributes: false,
        childList: true,
        subtree: true,
      });
    }
  }

  static #getNewsTabResults() {
    const includedElements = [
      {
        nodes: document.querySelectorAll('.snippet a'),
        highlightClass: 'wsn-brave-search-focused-news',
        containerSelector: (n) => n.parentElement,
      },
    ];
    return getSortedSearchResults(includedElements);
  }

  static #getVideosTabResults() {
    const includedElements = [
      {
        nodes: document.querySelectorAll('.card a'),
        highlightClass: 'wsn-brave-search-focused-card',
        highlightedElementSelector: (n) => n.closest('.card'),
        containerSelector: (n) => n.parentElement,
      },
    ];
    return getSortedSearchResults(includedElements);
  }

  getSearchResults() {
    if (BraveSearch.#isTabActive(this.tabs.navigateNewsTab)) {
      return BraveSearch.#getNewsTabResults();
    } else if (BraveSearch.#isTabActive(this.tabs.navigateVideosTab)) {
      return BraveSearch.#getVideosTabResults();
    }

    const includedElements = [
      {
        nodes: document.querySelectorAll('.snippet.fdb > a'),
        highlightClass: 'wsn-brave-search-focused-link',
        containerSelector: (n) => n.parentElement,
      },
      // News cards
      {
        nodes: document.querySelectorAll(
            '.card[data-type="news"]:nth-child(-n+3)',
        ),
        highlightClass: 'wsn-brave-search-focused-card',
      },
      // Video cards
      {
        nodes: document.querySelectorAll(
            '.card[data-type="videos"]:nth-child(-n+3)',
        ),
        highlightClass: 'wsn-brave-search-focused-card',
      },
    ];

    return getSortedSearchResults(includedElements);
  }

  static #isTabActive(tab) {
    return tab && tab.parentElement.classList.contains('active');
  }

  get tabs() {
    return {
      navigateSearchTab: document.querySelector('a[href*="/search?q="]'),
      navigateImagesTab: document.querySelector(
          '#tab-images > a:first-of-type',
      ),
      navigateNewsTab: document.querySelector('a[href*="/news?q="]'),
      navigateVideosTab: document.querySelector(
          '#tab-videos > a:first-of-type',
      ),
    };
  }
}

class StartPage {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^https:\/\/(www\.)?startpage\./;
  }
  get searchBoxSelector() {
    return '#q';
  }
  getTopMargin(element) {
    return getFixedSearchBoxTopMargin(
        document.querySelector('div.layout-web__header'),
        element,
    );
  }
  getBottomMargin(element) {
    // Startpage in Firefox has an issue where trying to scroll can result in
    // window.scrollY being updated for a brief time although no scrolling is
    // done, which confuses the scrollToElement function, which can lead to
    // being stuck focused on a search result.
    return isFirefox() ? 0 : getDefaultBottomMargin();
  }

  static #isSearchTab() {
    return document.querySelector('div.layout-web') != null;
  }
  static #isImagesTab() {
    return document.querySelector('div.layout-images') != null;
  }

  getSearchResults() {
    // Don't initialize results navigation on image search, since it doesn't
    // work there.
    if (StartPage.#isImagesTab()) {
      return [];
    }
    const containerSelector = (element) => {
      if (StartPage.#isSearchTab()) {
        return element.closest('.w-gl__result');
      }
      return element;
    };
    const includedElements = [
      {
        nodes: document.querySelectorAll('a.w-gl__result-url'),
        highlightedElementSelector: containerSelector,
        highlightClass: 'wsn-startpage-focused-link',
        containerSelector: containerSelector,
      },
      {
        nodes: document.querySelectorAll('.pagination--desktop button'),
        highlightClass: 'wsn-startpage-focused-link',
      },
      // As of 2020-06-20, this doesn't seem to match anything.
      {
        nodes: document.querySelectorAll(
            '.vo-sp.vo-sp--default > a.vo-sp__link',
        ),
        highlightedElementSelector: containerSelector,
        highlightClass: 'wsn-startpage-focused-link',
      },
    ];
    const excludedElements = document.querySelectorAll('button[disabled]');
    return getSortedSearchResults(includedElements, excludedElements);
  }

  get previousPageButton() {
    const menuLinks = document.querySelectorAll('.inline-nav-menu__link');
    if (!menuLinks || menuLinks.length < 4) {
      return null;
    }

    return document.querySelector(
        'form.pagination__form.next-prev-form--desktop:first-of-type',
    );
  }

  get nextPageButton() {
    const menuLinks = document.querySelectorAll('.inline-nav-menu__link');
    if (!menuLinks || menuLinks.length < 4) {
      return null;
    }

    return document.querySelector(
        'form.pagination__form.next-prev-form--desktop:last-of-type',
    );
  }

  get tabs() {
    const menuLinks = document.querySelectorAll('.inline-nav-menu__link');
    if (!menuLinks || menuLinks.length < 4) {
      return {};
    }
    return {
      navigateSearchTab: menuLinks[0],
      navigateImagesTab: menuLinks[1],
      navigateVideosTab: menuLinks[2],
      navigateNewsTab: menuLinks[3],
    };
  }

  changeTools(period) {
    const forms = document.forms;
    let timeForm;

    for (let i = 0; i < forms.length; i++) {
      if (forms[i].className === 'search-filter-time__form') {
        timeForm = forms[i];
      }
    }

    switch (period) {
      case 'd':
        timeForm.elements['with_date'][1].click();
        break;
      case 'w':
        timeForm.elements['with_date'][2].click();
        break;
      case 'm':
        timeForm.elements['with_date'][3].click();
        break;
      case 'y':
        timeForm.elements['with_date'][4].click();
        break;
      default:
        break;
    }
  }
}

class YouTube {
  constructor(options) {
    this.options = options;
    this.gridNavigation = false;
  }
  get urlPattern() {
    return /^https:\/\/(www)\.youtube\./;
  }
  get searchBoxSelector() {
    return 'input#search';
  }
  getTopMargin(element) {
    return getFixedSearchBoxTopMargin(
        document.querySelector('#masthead-container'),
        element,
    );
  }

  onChangedResults(callback) {
    // The ytd-section-list-renderer element may not exist yet when this code
    // runs, so we look for changes in the higher level elements until we find
    // ytd-section-list-renderer.
    const YT_CONTAINER_SELECTOR = [
      'ytd-section-list-renderer',
      '.ytd-section-list-renderer',
      'ytd-rich-grid-renderer',
      'ytd-shelf-renderer',
    ].join(',');
    const resultsObserver = new MutationObserver(
        debounce((mutationsList, observer) => {
          callback(true);
        }, 50),
    );
    let lastLoadedURL = null;
    const pageObserverCallback = (mutationsList, observer) => {
      const url = window.location.pathname + window.location.search;
      if (url === lastLoadedURL) {
        return;
      } else {
        resultsObserver.disconnect();
      }
      const containers = document.querySelectorAll(YT_CONTAINER_SELECTOR);
      if (containers.length == 0) {
        return;
      }
      lastLoadedURL = url;
      callback(false);
      for (const container of containers) {
        resultsObserver.observe(container, {
          attributes: false,
          childList: true,
          subtree: true,
        });
      }
    };
    // TODO: the observer callback is triggered many times because of the broad
    // changes that the observer tracks. I tried to use other observation specs
    // to limit it, but then it failed to detect URL changes without page load
    // (which is what happened in issue #337 [1]).
    // [1] https://github.com/infokiller/web-search-navigator/issues/337
    const pageObserver = new MutationObserver(
        debounce(pageObserverCallback, 50),
    );
    pageObserver.observe(document.querySelector('#page-manager'), {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }

  getSearchResults() {
    const includedElements = [
      // Videos in vertical search results: https://imgur.com/a/Z8KV5Oe
      {
        nodes: document.querySelectorAll('a#video-title.ytd-video-renderer'),
        highlightClass: 'wsn-youtube-focused-video',
        highlightedElementSelector: (n) => n.closest('ytd-video-renderer'),
        containerSelector: (n) => n.closest('ytd-video-renderer'),
      },
      // Playlist results in vertical search results: https://imgur.com/a/nPjGd9H
      {
        nodes: document.querySelectorAll(
            'ytd-playlist-renderer a[href*="/playlist"]',
        ),
        highlightClass: 'wsn-youtube-focused-video',
        highlightedElementSelector: (n) => n.closest('ytd-playlist-renderer'),
        containerSelector: (n) => n.closest('ytd-playlist-renderer'),
      },
      // Playlists
      {
        nodes: document.querySelectorAll('a.ytd-playlist-video-renderer'),
        highlightClass: 'wsn-youtube-focused-video',
        highlightedElementSelector: (n) =>
          n.closest('ytd-playlist-video-renderer'),
        containerSelector: (n) => n.closest('ytd-playlist-video-renderer'),
      },
      // Mixes
      {
        nodes: document.querySelectorAll('div#content a.ytd-radio-renderer'),
        highlightClass: 'wsn-youtube-focused-video',
      },
      // Channels
      {
        nodes: document.querySelectorAll(
            'ytd-grid-video-renderer a#video-title:not([aria-hidden="true"])',
        ),
        highlightClass: 'wsn-youtube-focused-grid-video',
        highlightedElementSelector: (n) => n.closest('ytd-grid-video-renderer'),
        containerSelector: (n) => n.closest('ytd-grid-video-renderer'),
      },
    ];
    // checking if homepage results are present
    const homePageElements = {
      nodes: document.querySelectorAll(
          'ytd-rich-item-renderer a#video-title-link',
      ),
      highlightClass: 'wsn-youtube-focused-video',
      highlightedElementSelector: (n) => n.closest('ytd-rich-item-renderer'),
      containerSelector: (n) => n.closest('ytd-rich-item-renderer'),
    };
    const results = getSortedSearchResults(
        [...includedElements, homePageElements],
        [],
    );
    // When navigating away from the home page, the home page elements are still
    // in the DOM but they are not visible, so we must check if they are
    // visible (using offsetParent), not just if they are present.
    const isHomePage = Array.from(homePageElements.nodes).some(
        (n) => n.offsetParent != null,
    );
    const gridRow = document.querySelector('ytd-rich-grid-row');
    if (isHomePage && gridRow != null) {
      results.itemsPerRow = gridRow.getElementsByTagName(
          'ytd-rich-item-renderer',
      ).length;
      results.gridNavigation = results.itemsPerRow > 0;
    }
    return results;
  }

  changeTools(period) {
    if (!document.querySelector('div#collapse-content')) {
      const toggleButton = document.querySelectorAll(
          'a.ytd-toggle-button-renderer',
      )[0];
      // Toggling the buttons ensures that div#collapse-content is loaded
      toggleButton.click();
      toggleButton.click();
    }
    const forms = document.querySelectorAll(
        'div#collapse-content > *:first-of-type ytd-search-filter-renderer',
    );
    let neededForm = null;
    switch (period) {
      case 'h':
        neededForm = forms[0];
        break;
      case 'd':
        neededForm = forms[1];
        break;
      case 'w':
        neededForm = forms[2];
        break;
      case 'm':
        neededForm = forms[3];
        break;
      case 'y':
        neededForm = forms[4];
        break;
    }
    if (neededForm) {
      neededForm.childNodes[1].click();
    }
  }
}

class GoogleScholar {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^https:\/\/scholar\.google\./;
  }
  get searchBoxSelector() {
    return '#gs_hdr_tsi';
  }

  getSearchResults() {
    const includedElements = [
      {
        nodes: document.querySelectorAll('.gs_rt a'),
        highlightClass: 'wsn-google-focused-link',
        highlightedElementSelector: (n) => n.closest('.gs_rt'),
        containerSelector: (n) => n.parentElement.parentElement,
      },
      {
        nodes: document.querySelectorAll(
            '.gs_ico_nav_previous, .gs_ico_nav_next',
        ),
        anchorSelector: (n) => n.parentElement,
        highlightClass: 'wsn-google-scholar-next-page',
        highlightedElementSelector: (n) => n.parentElement.children[1],
        containerSelector: (n) => n.parentElement.children[1],
      },
    ];
    return getSortedSearchResults(includedElements, []);
  }

  get previousPageButton() {
    const previousPageElement = document.querySelector('.gs_ico_nav_previous');
    if (previousPageElement !== null) {
      return previousPageElement.parentElement;
    }

    return null;
  }

  get nextPageButton() {
    const nextPageElement = document.querySelector('.gs_ico_nav_next');
    if (nextPageElement !== null) {
      return nextPageElement.parentElement;
    }
    return null;
  }
}

class Amazon {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^https:\/\/(www\.)?amazon\./;
  }
  get searchBoxSelector() {
    return '#twotabsearchtextbox';
  }
  onChangedResults(callback) {
    const container = document.querySelector('.s-main-slot');
    if (!container) {
      return;
    }
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          callback(false);
        }, 50),
    );
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: false,
    });
  }

  getSearchResults() {
    const includedElements = [
      // Carousel items
      {
        nodes: document.querySelectorAll(
            '.s-main-slot .a-carousel-card h2 .a-link-normal.a-text-normal',
        ),
        highlightedElementSelector: (n) => n.closest('.a-carousel-card'),
        highlightClass: 'wsn-amazon-focused-carousel-item',
        containerSelector: (n) => n.closest('.a-carousel-card'),
      },
      // Regular items.
      // NOTE: Must appear after the carousel items because this selector is
      // more general.
      {
        nodes: document.querySelectorAll(
            '.s-main-slot h2 .a-link-normal.a-text-normal',
        ),
        // highlightedElementSelector: (n) => n.parentElement.children[1],
        highlightedElementSelector: (n) =>
          n.closest('.a-section').parentElement.closest('.a-section'),
        highlightClass: 'wsn-amazon-focused-item',
        containerSelector: (n) =>
          n.closest('.a-section').parentElement.closest('.a-section'),
      },
      // Next/previous and page numbers.
      {
        nodes: document.querySelectorAll('a.s-pagination-item'),
        highlightClass: 'wsn-amazon-focused-item',
      },
      // Shopping card items
      {
        nodes: document.querySelectorAll(
            '.sc-list-item-content .a-list-item .a-link-normal',
        ),
        highlightClass: 'wsn-amazon-focused-cart-item',
        highlightedElementSelector: (n) => n.closest('.sc-list-item-content'),
        containerSelector: (n) => n.closest('.sc-list-item-content'),
      },
    ];
    // Exclude active page number and hidden carousel elements.
    // TODO: The hidden carousel elements do not match at page load because
    // they don't yet have the aria-hidden property set.
    const excludedElements = document.querySelectorAll(
        '.a-pagination .a-selected a, .a-carousel-card[aria-hidden="true"] a',
    );
    return getSortedSearchResults(includedElements, excludedElements);
  }

  get previousPageButton() {
    return document.querySelector('a.s-pagination-previous');
  }

  get nextPageButton() {
    return document.querySelector('a.s-pagination-next');
  }
}

class Github {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^https:\/\/(www\.)?github\.com/;
  }
  get searchBoxSelector() {
    // TODO: With the escape key, this only works the first time the keybinding
    // is used, Since Github seem to capture this as well, which causes it to
    // leave the search box.
    return 'input[name="q"]';
  }

  static #getCommitSearchLinks() {
    const commitsContainers = document.querySelectorAll(
        '#commit_search_results .text-normal',
    );
    const commits = [];
    for (const con of commitsContainers) {
      const links = con.querySelectorAll('a');
      if (links.length === 0) {
        continue;
      }
      if (links.length === 1) {
        commits.push(links[0]);
      } else {
        const prLink = con.querySelector(
            'a[data-hovercard-type="pull_request"]',
        );
        if (prLink != null) {
          commits.push(prLink);
        }
      }
    }
    return commits;
  }

  getSearchResults() {
    const includedElements = [
      // Repos
      {
        nodes: document.querySelectorAll('.repo-list a'),
        highlightClass: 'wsn-github-focused-item',
        containerSelector: (n) => n.closest('.mt-n1'),
      },
      // Code
      {
        nodes: document.querySelectorAll('#code_search_results .text-normal a'),
        highlightClass: 'wsn-github-focused-item',
      },
      // Commits/PRs
      {
        nodes: Github.#getCommitSearchLinks(),
        highlightClass: 'wsn-github-focused-item',
      },
      // Issues
      {
        nodes: document.querySelectorAll(
            '#issue_search_results .text-normal a',
        ),
        highlightClass: 'wsn-github-focused-item',
      },
      // Marketplace
      {
        nodes: document.querySelectorAll(
            '#marketplace_search_results .text-normal a',
        ),
        highlightClass: 'wsn-github-focused-item',
      },
      // Topics
      {
        nodes: document.querySelectorAll(
            '#topic_search_results .text-normal a',
        ),
        highlightClass: 'wsn-github-focused-item',
      },
      // Wikis
      {
        nodes: document.querySelectorAll('#wiki_search_results .text-normal a'),
        highlightClass: 'wsn-github-focused-item',
      },
      // Users
      {
        nodes: document.querySelectorAll('#user_search_results .text-normal a'),
        highlightClass: 'wsn-github-focused-item',
      },
      // Pinned repos in user profile
      {
        nodes: document.querySelectorAll(
            '.pinned-item-list-item-content span.repo',
        ),
        highlightClass: 'wsn-github-focused-item',
        highlightedElementSelector: (n) => n.closest('a'),
        containerSelector: (n) => n.closest('a'),
        anchorSelector: (n) => n.closest('a'),
      },
      // Personal repos list in user profile
      {
        nodes: document.querySelectorAll(
            '#user-repositories-list a[itemprop*="codeRepository"]',
        ),
        highlightClass: 'wsn-github-focused-item',
        containerSelector: (n) => n.closest('li') || n,
      },
      // Next/previous and page numbers.
      {
        nodes: document.querySelectorAll('.paginate-container a'),
        highlightClass: 'wsn-github-focused-pagination',
      },
    ];
    const searchParams = new URLSearchParams(window.location.search);
    // Starred repos of user
    if (searchParams.get('tab') === 'stars') {
      includedElements.push({
        nodes: document.querySelectorAll('h3 a'),
        highlightClass: 'wsn-github-focused-item',
      });
    }
    const excludedElements = [
      // Exclude small links
      ...document.querySelectorAll('.muted-link, .Link--muted'),
      // Exclude topic tags
      ...document.querySelectorAll('.topic-tag'),
      // Exclude small links in commits
      // ...document.querySelectorAll(
      //     '#commit_search_results .text-normal a.message'),
    ];
    return getSortedSearchResults(includedElements, excludedElements);
  }

  onChangedResults(callback) {
    const container = document.querySelector('body');
    if (!container) {
      return;
    }
    // Store the last URL to detect page navigations (for example going to the
    // next page of results).
    let lastURL = window.location.href;
    const observer = new MutationObserver(
        debounce((mutationsList, observer) => {
          let appendOnly = true;
          if (window.location.href !== lastURL) {
            lastURL = window.location.href;
            appendOnly = false;
          }
          callback(appendOnly);
        }, 50),
    );
    observer.observe(container, {
      attributes: false,
      childList: true,
      subtree: false,
    });
  }

  // Github already has built-in support for tabs:
  // https://docs.github.com/en/github/getting-started-with-github/keyboard-shortcuts
  get tabs() {
    return {};
  }
}

class Gitlab {
  constructor(options) {
    this.options = options;
  }

  get urlPattern() {
    return /^https:\/\/(www\.)?gitlab\.com/;
  }

  get searchBoxSelector() {
    return '.form-input, input[id=search]';
  }

  getTopMargin(element) {
    return getFixedSearchBoxTopMargin(
        document.querySelector('header.navbar'),
        element,
    );
  }

  onChangedResults(callback) {
    const containers = document.querySelectorAll(
        '.projects-list, .groups-list, #content-body',
    );
    const observer = new MutationObserver(async (mutationsList, observer) => {
      callback(true);
    });
    for (const container of containers) {
      observer.observe(container, {
        attributes: false,
        childList: true,
        subtree: true,
      });
    }
  }

  getSearchResults() {
    const includedElements = [
      {
        nodes: document.querySelectorAll('li.project-row h2 a'),
        containerSelector: (n) => n.closest('li.project-row'),
        highlightedElementSelector: (n) => n.closest('li.project-row'),
        highlightClass: 'wsn-gitlab-focused-group-row',
      },
      // Org subgroups, for example:
      // https://gitlab.archlinux.org/archlinux
      {
        nodes: document.querySelectorAll(
            'ul.groups-list li.group-row a[aria-label]',
        ),
        containerSelector: (n) => n.closest('li.group-row'),
        highlightedElementSelector: (n) => n.closest('li.group-row'),
        highlightClass: 'wsn-gitlab-focused-group-row',
      },
      // Prev/next page
      {
        nodes: document.querySelectorAll('li.page-item a.page-link'),
        containerSelector: (n) => n.closest('li.page-item'),
        highlightedElementSelector: (n) => n.closest('li.group-row'),
        highlightClass: 'wsn-gitlab-focused-group-row',
      },
    ];
    return getSortedSearchResults(includedElements);
  }
}

class CustomGitlab extends Gitlab {
  get urlPattern() {
    return new RegExp(this.options.customGitlabUrl);
  }
}

// Get search engine object matching the current url
/* eslint-disable-next-line no-unused-vars */
const getSearchEngine = (options) => {
  const searchEngines = [
    new GoogleSearch(options),
    new BraveSearch(options),
    new StartPage(options),
    new YouTube(options),
    new GoogleScholar(options),
    new Amazon(options),
    new Github(options),
    new Gitlab(options),
    new CustomGitlab(options),
  ];
  // Switch over all compatible search engines
  const href = window.location.href;
  for (let i = 0; i < searchEngines.length; i++) {
    if (href.match(searchEngines[i].urlPattern)) {
      return searchEngines[i];
    }
  }
  return null;
};
