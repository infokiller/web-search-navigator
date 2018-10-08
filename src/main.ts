import { extensionData } from './extension';
import * as util from './util';

const browser = util.getBrowser();

class Extension {
  data: typeof extensionData;
  constructor() {
    this.data = extensionData;
  }
  init() {
    if (!/^(www|encrypted)\.google\./.test(window.location.hostname)) {
      return;
    }
    const loadOptions = this.data.load();
    // Don't initialize results navigation on image search, since it doesn't work
    // there.
    if (!/[?&]tbm=isch(&|$)/.test(location.search)) {
      // This file is loaded only after the DOM is ready, so no need to wait for
      // DOMContentLoaded.
      loadOptions.then(() => this.initResultsNavigation());
    }
    loadOptions.then(() => this.initCommonGoogleSearchNavigation());
  }

  changeTools(period: string | null) {
    // Save current period and sort.
    const res = /&(tbs=qdr:.)(,sbd:.)?/.exec(location.href);
    const currPeriod = (res && res[1]) || '';
    const currSort = (res && res[2]) || '';
    // Remove old period and sort.
    const strippedHref = location.href.replace(/&tbs=qdr:.(,sbd:.)?/, '');
    if (period) {
      location.href =
        strippedHref + (period === 'a' ? '' : '&tbs=qdr:' + period + currSort);
    } else if (currPeriod) {
      // Can't apply sort when not using period.
      location.href =
        strippedHref + '&' + currPeriod + (currSort ? '' : ',sbd:1');
    }
  }

  initResultsNavigation() {
    const options = this.data.options.values;
    const state = this.data.state.values;
    const results = getGoogleSearchLinks();
    let isFirstNavigation = true;
    if (options.autoSelectFirst) {
      // Highlight the first result when the page is loaded, but don't scroll to
      // it because there may be KP cards such as stock graphs.
      results.focus(0, false);
    }
    if (location.href === state.lastQueryUrl) {
      isFirstNavigation = false;
      results.focus(state.lastFocusedIndex);
    }
    this.register(options.nextKey, () => {
      if (!options.autoSelectFirst && isFirstNavigation) {
        results.focus(0);
        isFirstNavigation = false;
      } else {
        results.focusNext(options.wrapNavigation);
      }
    });
    this.register(options.previousKey, () => {
      if (!options.autoSelectFirst && isFirstNavigation) {
        results.focus(0);
        isFirstNavigation = false;
      } else {
        results.focusPrevious(options.wrapNavigation);
      }
    });
    this.register(options.navigateKey, () => {
      const link = results.items[results.focusedIndex];
      state.lastQueryUrl = location.href;
      state.lastFocusedIndex = results.focusedIndex;
      this.data.options.save();
      link.anchor.click();
    });
    this.register(options.navigateNewTabKey, () => {
      const link = results.items[results.focusedIndex];
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: { url: link.anchor.href, active: true }
      });
    });
    this.register(options.navigateNewTabBackgroundKey, () => {
      const link = results.items[results.focusedIndex];
      browser.runtime.sendMessage({
        type: 'tabsCreate',
        options: { url: link.anchor.href, active: false }
      });
    });
    this.register(options.navigateShowAll, () => this.changeTools('a'));
    this.register(options.navigateShowHour, () => this.changeTools('h'));
    this.register(options.navigateShowDay, () => this.changeTools('d'));
    this.register(options.navigateShowWeek, () => this.changeTools('w'));
    this.register(options.navigateShowMonth, () => this.changeTools('m'));
    this.register(options.navigateShowYear, () => this.changeTools('y'));
    this.register(options.toggleSort, () => this.changeTools(null));
  }

  initCommonGoogleSearchNavigation() {
    const options = this.data.options.values;
    this.register(options.focusSearchInput, () => {
      const searchInput = document.querySelector(
        '#searchform input[name=q]'
      ) as HTMLInputElement;
      searchInput.focus();
      searchInput.select();
    });
    const tabs = [
      [
        options.navigateSearchTab,
        'a.q.qs:not([href*="&tbm="]):not([href*="maps.google."])'
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
      [options.navigateNextResultPage, '#pnnext']
    ];
    for (let i = 0; i < tabs.length; i++) {
      const tabCommand = tabs[i];
      this.register(tabCommand[0], () => {
        const node = document.querySelector(tabCommand[1]);
        if (node !== null) {
          location.href = node.href;
        }
      });
    }
  }

  register(shortcut: string, callback: () => void) {
    key(shortcut, event => {
      callback();
      if (event !== null) {
        event.stopPropagation();
        event.preventDefault();
      }
      return false;
    });
  }
}

type ContainerSelector = ((e: Node) => Element) | null;

class SearchResult {
  anchor: HTMLAnchorElement;
  containerSelector: ContainerSelector;

  constructor(anchor: HTMLAnchorElement, containerSelector: ContainerSelector) {
    this.anchor = anchor;
    this.containerSelector = containerSelector;
  }

  getContainer() {
    if (!this.containerSelector) {
      return this.anchor;
    }
    return this.containerSelector(this.anchor);
  }
}

class SearchResultCollection {
  items: SearchResult[];
  focusedIndex: number;

  constructor(
    includedNodeLists: Array<[NodeList, ContainerSelector]>,
    excludedNodeLists: NodeList[]
  ) {
    this.items = [];
    this.focusedIndex = 0;
    const excludedResultsSet: Set<Node> = new Set();
    for (const nodes of excludedNodeLists) {
      nodes.forEach(node => {
        excludedResultsSet.add(node);
      });
      // for (const node of nodes) {
      //   excludedResultsSet.add(node);
      // }
    }
    for (const result of includedNodeLists) {
      const nodes = result[0];
      const containerSelector = result[1];
      for (let j = 0; j < nodes.length; j++) {
        const node = nodes[j];
        if (!excludedResultsSet.has(node)) {
          this.items.push(
            new SearchResult(node as HTMLAnchorElement, containerSelector)
          );
        }
      }
    }
    // Sort items by their document position.
    this.items.sort((a, b) => {
      const position = a.anchor.compareDocumentPosition(b.anchor);
      if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
        return -1;
      } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  focus(index: number, scrollToResult = true) {
    if (this.focusedIndex >= 0) {
      const item = this.items[this.focusedIndex];
      // Remove highlighting from previous item.
      if (item) {
        item.anchor.classList.remove('highlighted-search-result');
      }
    }
    const newItem = this.items[index];
    // exit if no new item
    if (!newItem) {
      this.focusedIndex = -1;
      return;
    }
    newItem.anchor.classList.add('highlighted-search-result');
    // We already scroll below, so no need for focus to scroll. The scrolling
    // behavior of `focus` also seems less predictable and caused an issue, see
    // also: https://github.com/infokiller/web-search-navigator/issues/35
    newItem.anchor.focus({ preventScroll: true });
    // ensure whole search result container is visible in the viewport, not only
    // the search result link
    if (scrollToResult) {
      const container = newItem.getContainer() || newItem.anchor;
      scrollToElement(container);
    }
    this.focusedIndex = index;
  }

  focusNext(shouldWrap: boolean) {
    if (this.focusedIndex < this.items.length - 1) {
      this.focus(this.focusedIndex + 1);
    } else if (shouldWrap) {
      this.focus(0);
    }
  }

  focusPrevious(shouldWrap: boolean) {
    if (this.focusedIndex > 0) {
      this.focus(this.focusedIndex - 1);
    } else if (shouldWrap) {
      this.focus(this.items.length - 1);
    } else {
      window.scrollTo(window.scrollX, 0);
    }
  }
}

const scrollToElement = (element: Element): void => {
  const elementBounds = element.getBoundingClientRect();
  // firefox displays tooltip at the bottom which obstructs the view
  // as a workaround ensure extra space from the bottom in the viewport
  // firefox detection (https://stackoverflow.com/a/7000222/2870889)
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  // hardcoded height of the tooltip plus some margin
  const firefoxBottomDelta = 26;
  const bottomDelta = isFirefox ? firefoxBottomDelta : 0;
  if (elementBounds.top < 0) {
    // scroll element to top
    element.scrollIntoView(true);
  } else if (elementBounds.bottom + bottomDelta > window.innerHeight) {
    // scroll element to bottom
    element.scrollIntoView(false);
    window.scrollBy(0, bottomDelta);
  }
};

const getGoogleSearchLinks = () => {
  // The nodes are returned in the document order, which is what we want.
  return new SearchResultCollection(
    [
      [
        document.querySelectorAll('#search .r > a:first-of-type'),
        (n: Node): Element => n.parentElement!.parentElement!
      ],
      [document.querySelectorAll('div.zjbNbe > a'), null],
      [document.querySelectorAll('div.eIuuYe a'), null], // shopping results
      [document.querySelectorAll('#pnprev, #pnnext'), null]
    ],
    [document.querySelectorAll('#search .kp-blk .r > a:first-of-type')]
  );
};

const extension = new Extension();
extension.init();
