# ![Logo](./src/icon48.png?raw=true) Web Search Navigator

![Demo flow](./assets/demo.gif?raw=true)

Simple browser extension that adds keyboard shortcuts to Google search™.
Google search™ used to provide experimental keyboard navigation, but it was [often broken](https://goo.gl/1zMkYu), and seems to have been [removed as of 2017-07-31](https://stackoverflow.com/a/45513198/1014208).
In addition, I wanted to add new keyboard shortcuts and the existing ones to be
more vim like (j/k for navigation).

## Installation

NOTE: Due to temporary copyright issues (#59, #60) the extension was taken down on 2018-05-21. We expect it to be back on the store soon (pending a minor legal review by Google).

* for Chrome: Install from the [Chrome Web
Store](https://chrome.google.com/webstore/detail/enhanced-keyboard-navigat/cohamjploocgoejdfanacfgkhjkhdkek).
* for Firefox: Install from the [Add-ons for Firefox](https://addons.mozilla.org/firefox/addon/the-google-search-navigator/).
* for Microsoft Edge: Install from the [Microsoft Store](https://www.microsoft.com/store/apps/9P0PTV58KND9).

## Keybindings

_Note: All shortcuts can be customized to your liking via options._

*   `↓`/`j`: Select next search result
*   `↑`/`k`: Select previous previous result
*   `/`/`Escape`: Focus on input search box
*   `Enter`/`Space`: Navigate to selected result
*   `Ctrl+Enter`/`⌘+Enter`/`Ctrl+Space`: Open selected result in background tab
*   `Ctrl+Shift+Enter`/`⌘+Shift+Enter`/`Ctrl+Shift+Space`: Open selected result in new window/tab
*   `←`/`h`: Navigate to previous search result page
*   `→`/`l`: Navigate to next search result page
*   `a`/`s`: Navigate to All tab (= default search tab)
*   `i`: Navigate to images tab
*   `v`: Navigate to videos tab
*   `m`: Navigate to maps tab
*   `n`: Navigate to news tab
*   `alt+s`: Navigate to shopping tab
*   `b`: Navigate to books tab
*   `alt+l`: Navigate to flights tab
*   `f`: Navigate to financial tab
*	`Ctrl+Shift+h`: Filter results by past hour
*	`Ctrl+Shift+d`: Filter results by past 24 hours (day)
*	`Ctrl+Shift+w`: Filter results by past week
*	`Ctrl+Shift+m`: Filter results by past month
*	`Ctrl+Shift+y`: Filter results by past year
*	`Ctrl+Shift+a`: Turn off filter (show all results)
*	`Ctrl+Shift+s`: Toggle sort by date/relevance (only when filtering)

## Development

We use [yarn](https://yarnpkg.com/) package manager for dependency management and [gulp](https://gulpjs.com/) for build.
Installing and building (deploying the web extension files) is as easy as:

```
yarn install && yarn build
```

The extension will be deployed directly to the `src` directory. You can load this directory as an unpacked extensions to
your browser.

_It would be better to deploy for example to `build/deploy` and add `gulp-watch` to update the deployed files
automatically. However when done so the browser's (Chrome) auto-reload extension gets broken and one has to reload the
extension manually on every change. Hence the `src` directory is used for the convenience._

## Build

To deploy the production sources use:

```
yarn build --production
```

The automated build scripts are currently not implemented so manual process is required afterward.

## TODO

*   Add option for navigating "Top stories"
*   Remove Keymaster dependency and add functions for validation user provided
    Keybindings

## Trademarks notice

This project is not affiliated with Google LLC.

©2018 Google LLC All rights reserved. Google™ search is a trademark of Google LLC.
