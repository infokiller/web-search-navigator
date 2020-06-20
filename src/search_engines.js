/**
 * This file contains search engine specific logic via search engine objects.
 *
 * A search engine object must provide the following:
 *  - {regex} urlPattern
 *  - {CSS selector} searchBoxSelector
 *  - {SearchResult[]} getSearchResults()
 *  - {None} changeTools(period)
 *
 * Optional functions/properties:
 *  - {CSS class name} highlightClass:
 *    Default: "default-focused-search-result"
 *  - {Array} tabs
 *    Default: []
 *  - {int} marginTop: used if top results are not entirely visible
 *    Default: 0
 *  - {int} marginBottom: used if bottom results are not entirely visible
 *    Default: 0
 *  - {CSS selector} endlessScrollingContainer: CSS selector of the container
 *    containing search results that need tracking for endless scrolling
 *    support.
 *    Default: null
*/

/* eslint-disable max-len */

class SearchResult {
  /**
  * @param {Element} element
  * @param {function|null} anchorSelector
  * @param {string} highlightClass
  * @param {function|null} highlightedElementSelector
  * @param {function|null} containerSelector
  */
  constructor(element, anchorSelector, highlightClass,
      highlightedElementSelector, containerSelector) {
    this.element_ = element;
    this.anchorSelector_ = anchorSelector;
    this.highlightClass = highlightClass;
    this.highlightedElementSelector_ = highlightedElementSelector;
    this.containerSelector_ = containerSelector;
  }
  get anchor() {
    if (!this.anchorSelector_) {
      return this.element_;
    }
    return this.anchorSelector_(this.element_);
  }
  get container() {
    if (!this.containerSelector_) {
      return this.element_;
    }
    return this.containerSelector_(this.element_);
  }
  get highlightedElement() {
    if (!this.highlightedElementSelector_) {
      return this.element_;
    }
    return this.highlightedElementSelector_(this.element_);
  }
}

// eslint-disable-next-line
/**
 * @param {...[Element[], function|null]} includedSearchResults An array of
 * tuples.  Each tuple contains collection of the search results optionally
 * accompanied with their container selector.
 * @constructor
 */
const getSortedSearchResults = (
    includedSearchResults, excludedNodeList = []) => {
  const excludedResultsSet = new Set();
  for (const node of excludedNodeList) {
    excludedResultsSet.add(node);
  }
  const searchResults = [];
  for (const results of includedSearchResults) {
    for (const node of results.nodes) {
      if (!excludedResultsSet.has(node)) {
        // Prevent adding the same node multiple times.
        excludedResultsSet.add(node);
        searchResults.push(new SearchResult(
            node,
            results.anchorSelector,
            results.highlightClass,
            results.highlightedElementSelector,
            results.containerSelector,
        ));
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

class GoogleSearch {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^(www|encrypted)\.google\./;
  }
  get searchBoxSelector() {
    // Must match search engine search box
    // NOTE: we used '#searchform input[name=q]' before 2020-06-05 but that
    // doesn't work in the images search tab. Another option is to use
    // 'input[role="combobox"]' but this doesn't work when there's also a
    // dictionary search box.
    // return '#searchform input[name=q]',
    return 'form[role=search] input[name=q]';
  }
  get marginTop() {
    // When scrolling down, the search box can hide some of the search results,
    // so we try to compensate for it.
    const searchBoxContainer = document.querySelector('#searchform.minidiv');
    if (!searchBoxContainer) {
      return 0;
    }
    return searchBoxContainer.getBoundingClientRect().height;
  }

  isImagesTab() {
    return /[?&]tbm=isch(&|$)/.test(location.search);
  }

  getSearchResults() {
    // Don't initialize results navigation on image search, since it doesn't
    // work there.
    if (this.isImagesTab()) {
      return [];
    }
    const includedElements = [
      {
        nodes: document.querySelectorAll('#search .r > a:first-of-type'),
        highlightClass: 'default-focused-search-result',
        containerSelector: (n) => n.parentElement.parentElement,
      },
      {
        nodes: document.querySelectorAll('#search .r g-link > a:first-of-type'),
        highlightClass: 'default-focused-search-result',
        containerSelector: (n) => n.parentElement.parentElement,
      },
      {
        nodes: document.querySelectorAll('div.zjbNbe > a'),
        highlightClass: 'default-focused-search-result',
      },
      // Shopping results
      {
        nodes: document.querySelectorAll('div.eIuuYe a'),
        highlightClass: 'default-focused-search-result',
      },
      {
        nodes: document.querySelectorAll('#pnprev, #pnnext'),
        highlightClass: 'default-focused-search-result',
      },
    ];
    if (this.options.googleIncludeCards) {
      const nearestChildOrParentAnchor = (element) => {
        const childAnchor = element.querySelector('a');
        if (childAnchor && childAnchor.href) {
          return childAnchor;
        }
        return element.closest('a');
      };
      const nearestCardContainer = (element) => {
        return element.closest('g-inner-card');
      };
      includedElements.push(
          // Top stories, Twitter, and videos.
          {
            nodes: document.querySelectorAll(
                '[data-init-vis=true] [role=heading]'),
            anchorSelector: nearestChildOrParentAnchor,
            highlightedElementSelector: nearestCardContainer,
            highlightClass: 'google-focused-card',
          },
          // Small top stories section.
          {
            nodes: document.querySelectorAll('.P5BnJb'),
            anchorSelector: (n) => n.parentElement,
            highlightClass: 'default-focused-search-result',
          },
      );
    }
    return getSortedSearchResults(includedElements,
        document.querySelectorAll(
            '#search .kp-blk:not(.c2xzTb) .r > a:first-of-type'),
    );
  }

  // Array storing tuples of tabs navigation keybindings and their corresponding
  // CSS selector
  // TODO: Only return the selectors for each tab, not the keybindings which
  // should only be used in a higher level scope.
  get tabs() {
    const options = this.options;
    if (this.isImagesTab()) {
      return [
        [options.navigateSearchTab, '.T47uwc > a:nth-child(1)'],
        [options.navigateMapsTab, '.T47uwc > a:nth-child(3)'],
        [options.navigateVideosTab, '.T47uwc > a:nth-child(4)'],
        [options.navigateNewsTab, '.T47uwc > a:nth-child(5)'],
        // [options.navigateBooksTab, '.T47uwc div a:nth-child(1)'],
        // [options.navigateFlightsTab, '.T47uwc div a:nth-child(2)'],
        // [options.navigateFinancialTab, '.T47uwc div a:nth-child(3)'],
        [options.navigatePreviousResultPage, '#pnprev'],
        [options.navigateNextResultPage, '#pnnext'],
      ];
    }
    return [
      [
        options.navigateSearchTab,
        'a.q.qs:not([href*="&tbm="]):not([href*="maps.google."])',
      ],
      [options.navigateImagesTab, 'a.q.qs[href*="&tbm=isch"]'],
      [options.navigateVideosTab, 'a.q.qs[href*="&tbm=vid"]'],
      [options.navigateMapsTab, 'a.q.qs[href*="maps.google."]'],
      [options.navigateNewsTab, 'a.q.qs[href*="&tbm=nws"]'],
      [options.navigateShoppingTab, 'a.q.qs[href*="&tbm=shop"]'],
      [options.navigateBooksTab, 'a.q.qs[href*="&tbm=bks"]'],
      [options.navigateFlightsTab, 'a.q.qs[href*="&tbm=flm"]'],
      [options.navigateFinancialTab, 'a.q.qs[href*="&tbm=fin"]'],
      [options.navigatePreviousResultPage, '#pnprev'],
      [options.navigateNextResultPage, '#pnnext'],
    ];
  }

  /**
   *  Filter the results based on date
   * @param {*} period, filter identifier. Accpeted filter are :
   *  'h' : get results from last hour
   *  'd' : get result from last day
   *  'w' : get results from last week
   *  'm' : get result from last month
   *  'y' : get result from last year
   */
  changeTools(period) {
    // Save current period and sort.
    const res = /&(tbs=qdr:.)(,sbd:.)?/.exec(location.href);
    const currPeriod = (res && res[1]) || '';
    const currSort = (res && res[2]) || '';
    // Remove old period and sort.
    const strippedHref = location.href.replace(/&tbs=qdr:.(,sbd:.)?/, '');
    if (period) {
      location.href = strippedHref +
          (period === 'a' ? '' : '&tbs=qdr:' + period + currSort);
    } else if (currPeriod) {
      // Can't apply sort when not using period.
      location.href = strippedHref +
          '&' + currPeriod + (currSort ? '' : ',sbd:1');
    }
  }
}

class StartPage {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^(www\.)?startpage\./;
  }
  get searchBoxSelector() {
    return '.search-form__form input[id=q]';
  }
  get marginTop() {
    if (this.isSearchTab()) {
      return 113;
    }
    return 0;
  }

  isSearchTab() {
    const searchLayoutDiv =
            document.querySelector('div.layout.layout--default');
    return (typeof(searchLayoutDiv) != 'undefined' && searchLayoutDiv != null);
  }
  isImagesTab() {
    const imgLayoutDiv =
          document.querySelector('div.layout-images.layout-images--default');
    return (typeof(imgLayoutDiv) != 'undefined' && imgLayoutDiv != null);
  }

  getSearchResults() {
    // Don't initialize results navigation on image search, since it doesn't
    // work there.
    if (this.isImagesTab()) {
      return [];
    }
    const highlightedElementSelector = (element) => {
      if (this.isSearchTab()) {
        return element.closest('.w-gl__result');
      }
      return element;
    };
    const includedElements = [
      {
        nodes: document.querySelectorAll(
            '.w-gl--default.w-gl .w-gl__result > .w-gl__result-title'),
        highlightedElementSelector: highlightedElementSelector,
        highlightClass: 'startpage-focused-search-result',
        containerSelector: (n) => n.parentElement,
      },
      {
        nodes: document.querySelectorAll(
            '.vo-sp.vo-sp--default > a.vo-sp__link'),
        highlightedElementSelector: highlightedElementSelector,
        highlightClass: 'startpage-focused-search-result',
      },
    ];
    return getSortedSearchResults(includedElements, []);
  }

  get tabs() {
    const options = this.options;
    return [
      [options.navigateSearchTab, 'div.inline-nav-menu__container > form.inline[action="/sp/search"]:first-of-type'],
      [options.navigateImagesTab, 'div.inline-nav-menu__container > form.inline[action="/sp/search"]:nth-of-type(2)'],
      [options.navigateVideosTab, 'div.inline-nav-menu__container > form.inline[action="/sp/search"]:last-of-type'],
      [options.navigatePreviousResultPage, 'form.pagination__form.next-prev-form--desktop:first-of-type'],
      [options.navigateNextResultPage, 'form.pagination__form.next-prev-form--desktop:last-of-type'],
    ];
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

class Youtube {
  constructor(options) {
    this.options = options;
  }
  get urlPattern() {
    return /^(www)\.youtube\./;
  }
  get searchBoxSelector() {
    return 'input#search';
  }
  get endlessScrollingContainer() {
    return 'div#contents div#contents';
  }

  getSearchResults() {
    const includedElements = [
      // Videos
      {
        nodes: document.querySelectorAll('#title-wrapper h3 a#video-title'),
        highlightClass: 'youtube-focused-search-result',
        containerSelector: (n) => n.parentElement.parentElement,
      },
      // Playlists
      {
        nodes: document.querySelectorAll('div#content a.ytd-playlist-renderer'),
        highlightClass: 'youtube-focused-search-result',
      },
      // Mixes
      {
        nodes: document.querySelectorAll('div#content a.ytd-radio-renderer'),
        highlightClass: 'youtube-focused-search-result',
      },
      // Channels
      {
        nodes: document.querySelectorAll('div#info.ytd-channel-renderer'),
        highlightClass: 'youtube-focused-search-result',
      },
    ];
    return getSortedSearchResults(includedElements, []);
  }

  get tabs() {
    // TODO: Support tabs in Youtube.
    return [];
  }

  changeTools(period) {
    if (!document.querySelector('div#collapse-content')) {
      const toggleButton = document.querySelectorAll(
          'a.ytd-toggle-button-renderer')[0];
      // Toggling the buttons ensures that div#collapse-content is loaded
      toggleButton.click();
      toggleButton.click();
    }
    const forms = document.querySelectorAll(
        'div#collapse-content > *:first-of-type ytd-search-filter-renderer');
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

// Get search engine object matching the current url
/* eslint-disable-next-line no-unused-vars */
const getSearchEngine = (options) => {
  const searchEngines = [
    new GoogleSearch(options),
    new StartPage(options),
    new Youtube(options),
  ];
  // Switch over all compatible search engines
  const host = window.location.hostname;
  for (let i = 0; i < searchEngines.length; i++) {
    if (host.match(searchEngines[i].urlPattern)) {
      return searchEngines[i];
    }
  }
  return null;
};
