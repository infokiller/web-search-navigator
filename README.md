# ![Logo](./src/icon48.png?raw=true) Google Search Navigator

![Demo flow](./assets/demo.gif?raw=true)

This is a simple Google Chrome extension that enhances the keyboard navigation
in Google Search. Google used to provide an experimental keyboard navigation for
search results, but it was [often broken](https://goo.gl/1zMkYu), and seems to
have been [removed as of
2017-07-31](https://stackoverflow.com/a/45513198/1014208).
In addition, I wanted to add new keyboard shortcuts and the existing ones to be
more vim like (j/k for navigation).

Install from the [Chrome Web
Store](https://chrome.google.com/webstore/detail/enhanced-keyboard-navigat/cohamjploocgoejdfanacfgkhjkhdkek)

## Keybindings

_Note: All shortcuts can be customized to your liking via options._ 

*   `↓`/`j`: Select next search result
*   `↑`/`k`: Select previous previous result
*   `←`/`h`: Navigate to previous search result page
*   `→`/`l`: Navigate to next search result page
*   `/`/`Escape`: Focus on input search box
*   `Enter`/`Space`: Navigate to selected result
*   `Ctrl+Enter`/`⌘+Enter`/`Ctrl+Space`: Open selected result in new tab/window
*   `a`/`s`: Navigate to All tab (= default search tab)
*   `i`: Navigate to images tab
*   `v`: Navigate to videos tab
*   `m`: Navigate to maps tab
*   `n`: Navigate to news tab

## TODO

*   Add option for navigating "Top stories"
*   Remove Keymaster dependency and add functions for validation user provided
    Keybindings
