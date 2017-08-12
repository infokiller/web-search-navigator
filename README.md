# ![Logo](https://github.com/infokiller/google-search-navigator/blob/master/icon48.png?raw=true) Google Search Navigator

![Demo flow](https://github.com/infokiller/google-search-navigator/blob/master/demo.gif?raw=true)

This is a simple Google Chrome extension that enhances the keyboard navigation
in Google Search. Google provides an experimental keyboard navigation for search
results, but it's often broken for me (and [not just for
me](https://goo.gl/1zMkYu)). In addition, I wanted to add new keyboard shortcuts
and customize some of the existing ones to be more vim like (j/k for
navigation).

Install from the [Chrome Web
Store](https://chrome.google.com/webstore/detail/enhanced-keyboard-navigat/cohamjploocgoejdfanacfgkhjkhdkek)

## Keybindings

*   `↓`/`j`: Select next search result
*   `↑`/`k`: Select previous previous result
*   `/`/`Escape`: Focus on input search box
*   `Enter`/`Space`: Navigate to selected result
*   `Ctrl+Enter`/`⌘+Enter`/`Ctrl+Space`: Open selected result in new tab/window
*   `a`/`s`: Navigate to All tab (= default search tab)
*   `i`: Navigate to Images tab
*   `v`: Navigate to Videos tab
*   `m`: Navigate to Maps tab
*   `n`: Navigate to News tab

## TODO

*   Add option for navigating "Top stories"
*   Remove Keymaster dependency and add functions for validation user provided
    Keybindings