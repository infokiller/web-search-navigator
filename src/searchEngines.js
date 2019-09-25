const options = extension.options.sync.values;

/**
 * Store all compatible saerch engines
 *
 * A search engine object has to provide the following :
 *
 *  - {boolean} canInit()
 *  - {regex} urlPattern
 *  - {CSS selector} searchBoxSelector
 *  - {SearchResultCollection} getSearchLinks()
 *  - {None} changeTools(period)
 *  - {CSS class name} HighlightClass
 *  - {Array} tabs
 *
 * Contexts :
 *
 * Some properties can be setted on specified context.
 * For this, you need a contexts object inside your search engine object.
 * As the name suggest, it hold contexts, that are function returning
 * a boulean if a specified context is matched.
 * For example, a context can be the presence of a special element in the
 * page, indicating that you are on a page where you need the property.
 *
 * A context-able property must follow this structure :
 *
 * property: [value, [contextA, contextB], defaultValue]
 *
 * property will be setted to value when contextA or contextB will be true.
 * If all contexts are false, it will be setted to defaultValue
 *
 * Note that context-able properties MUST have a context array containing
 * at least one context. If you want to set the same value for all context
 * You can use 'all' keyword :
 *
 * property: [value, ['all']]
 *
 * Context-able properties :
 *
 *  - {CSS selector} HighlightedParentSelector
 *      When setted, the closest parent element of the focused one matching this
 *      Selector will be highlighted
 *
 *  - {number} marginTop, Set this if top results are not entirely visisble
 *  - {number} marginBottom, Set this if bottom results are not entirely visisble
 *
 */

const searchEngines = [
    // Google
    {
        /**
         * @returns {boolean} true if result navigation keybindings can be,
         *  initialized or false if only global keybindings can be initialized
         */
        canInit() {
            // Don't initialize results navigation on image search, since it doesn't work
            // there.
            return !this.contexts.images()
        },
        contexts: {
            images: () => {
                return (/[?&]tbm=isch(&|$)/.test(location.search));
            }
        },
        // Must match search engine url
        urlPattern: /^(www|encrypted)\.google\./,
        // Must match search engine search box
        searchBoxSelector: '#searchform input[name=q]',
        HighlightClass: 'default-focused-search-result',
        /**
         * Array storing tuples of tabs name and their corresponding CSS selector
         */
        tabs: [
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
        ],
        /**
         * Get result links
         * @returns a SearchResultCollection object
         */
        getSearchLinks () {
            return new SearchResultCollection(
                [
                    [
                    document.querySelectorAll('#search .r > a:first-of-type, #search .r g-link > a:first-of-type'),
                    n => n.parentElement.parentElement
                    ],
                    [document.querySelectorAll('div.zjbNbe > a'), null],
                    [document.querySelectorAll('div.eIuuYe a'), null], // shopping results
                    [document.querySelectorAll('#pnprev, #pnnext'), null]
                ],
                [document.querySelectorAll('#search .kp-blk:not(.c2xzTb) .r > a:first-of-type')]
                );
        },
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
                location.href =
                strippedHref + (period === 'a' ? '' : '&tbs=qdr:' + period + currSort);
            } else if (currPeriod) {
                // Can't apply sort when not using period.
                location.href =
                strippedHref + '&' + currPeriod + (currSort ? '' : ',sbd:1');
            }
        }
    },

    // Startpage
    {
        canInit() {
            // Don't initialize results navigation on image search, since it doesn't work
            // there.
            return !this.contexts.images();
        },
        contexts: {
            search: () => {
                const searchLayoutDiv = document.querySelector('div.layout.layout--default');
                return (typeof(searchLayoutDiv) != 'undefined' && searchLayoutDiv != null);
            },
            videos: () => {
                const vidsLayoutDiv = document.querySelector('div.layout-video.layout-video--default');
                return (typeof(vidsLayoutDiv) != 'undefined' && vidsLayoutDiv != null);
            },
            images: () => {
                const imgLayoutDiv = document.querySelector('div.layout-images.layout-images--default');
                return (typeof(imgLayoutDiv) != 'undefined' && imgLayoutDiv != null);
            }
        },
        urlPattern: /^www\.startpage\./,
        searchBoxSelector: '.search-form__form input[id=q]',
        HighlightClass: 'startpage-focused-search-result',
        // The HighlightClass style will be applied on the closest parent of the focused element matching this selector
        // When not set, HighlightClass style is applied on the focused element itself
        HighlightedParentSelector: ['.w-gl__result', ['search'], null],
        marginTop: [113, ['search'], 0],
        getSearchLinks () {
            return new SearchResultCollection(
                [
                  [
                    document.querySelectorAll('.w-gl--default.w-gl .w-gl__result > .w-gl__result-title'),
                    n => n.parentElement,
                  ],
                  [document.querySelectorAll('.vo-sp.vo-sp--default > a.vo-sp__link'), null],
                ]
              );
        },
        tabs: [
            [options.navigateSearchTab, 'div.inline-nav-menu__container > form.inline[action="/sp/search"]:first-of-type'],
            [options.navigateImagesTab, 'div.inline-nav-menu__container > form.inline[action="/sp/search"]:nth-of-type(2)'],
            [options.navigateVideosTab, 'div.inline-nav-menu__container > form.inline[action="/sp/search"]:last-of-type'],
            [options.navigatePreviousResultPage, 'form.pagination__form.next-prev-form--desktop:first-of-type'],
            [options.navigateNextResultPage, 'form.pagination__form.next-prev-form--desktop:last-of-type']
          ],
        changeTools(period) {
            const forms = document.forms
            let timeForm

            for (let i = 0; i < forms.length; i++) {
                if (forms[i].className === "search-filter-time__form") {
                    timeForm = forms[i]
                }
            }

            switch (period) {
                case 'd':
                    timeForm.elements["with_date"][1].click()
                    break;
                case 'w':
                    timeForm.elements["with_date"][2].click()
                    break;
                case 'm':
                    timeForm.elements["with_date"][3].click()
                    break;
                case 'y':
                    timeForm.elements["with_date"][4].click()
                    break;
                default:
                    break;
            }
        }
    },
    {
        canInit(){
            return true;
        }, 
        urlPattern: /^(www)\.youtube\./,
        searchBoxSelector: 'input#search',
        HighlightClass: "youtube-focused-search-result",
        tabs: [
            //Leave this empty for now
        ],
        getSearchLinks() {
            return new SearchResultCollection([
                //Videos
                [document.querySelectorAll("#title-wrapper h3 a#video-title"),
                n => n.parentElement.parentElement
                ],
                //Playlists
                [document.querySelectorAll("div#content a.ytd-playlist-renderer"), null],
                //Mixes
                [document.querySelectorAll("div#content a.ytd-radio-renderer"), null],
                //Channels
                [document.querySelectorAll("div#info.ytd-channel-renderer"), null]
            ],[])
        },
        endlessScrolling: {
            container: "div#contents div#contents"
        },
        changeTools(period){
            if(!document.querySelector("div#collapse-content")){
                let toggle_btn = document.querySelectorAll("a.ytd-toggle-button-renderer")[0];
                //Toggling the buttons ensures that div#collapse-content is loaded 
                toggle_btn.click();
                toggle_btn.click();
            }
            let forms = document.querySelectorAll("div#collapse-content > *:first-of-type ytd-search-filter-renderer")
            let neededForm = null;
            switch(period){
                case "h": 
                    neededForm = forms[0];
                    break;
                case "d":
                    neededForm = forms[1];
                    break;
                case "w":
                    neededForm = forms[2];
                    break;
                case "m":
                    neededForm = forms[3];
                    break;
                case "y":
                    neededForm = forms[4];
                    break;
            }
            if(neededForm){
                neededForm.childNodes[1].click()
            }
        }

    }
]

/**
 * Get search engine object matching the current url
 * @returns search engine
 */
function getSearchEngine() {
    // Switch over all compatible search engines
    const host = window.location.hostname
    for (let i = 0; i < searchEngines.length; i++) {
        if (host.match(searchEngines[i].urlPattern)) {
            return searchEngines[i]
        }
    }
    return null;
}