const options = extension.options.sync.values;

/**
 * Store all compatible saerch engines
 *
 * A search engine object has to provide the following :
 *
 *  - {regex} urlPattern
 *  - {CSS selector} searchBoxSelector
 *  - {SearchResultCollection} getSearchLinks()
 *  - {None} changeTools(period)
 */
const searchEngines = [
    // Google
    {
        // Must match search engine url
        urlPattern: /^(www|encrypted)\.google\./,
        // Must match search engine search box
        searchBoxSelector: '#searchform input[name=q]',
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
                [document.querySelectorAll('#search .kp-blk .r > a:first-of-type')]
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
        urlPattern: /^(www|encrypted)\.startpage\./,
        searchBoxSelector: '.search-form__form input[id=q]',
        getSearchLinks () {
            return new SearchResultCollection(
                [
                  [
                    document.querySelectorAll('.w-gl--default.w-gl .w-gl__result > a.w-gl__result-url'),
                    n => n.parentElement.parentElement
                  ]
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
}
