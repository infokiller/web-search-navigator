# ![Logo](./src/icon48.png?raw=true) Web Search Navigator

![Demo flow](./assets/demo.gif?raw=true)

Simple browser extension that adds keyboard shortcuts to Google search™.
Google search™ used to provide experimental keyboard navigation, but it was [often broken](https://goo.gl/1zMkYu), and seems to have been [removed as of 2017-07-31](https://stackoverflow.com/a/45513198/1014208).
In addition, I wanted to add new keyboard shortcuts and the existing ones to be
more vim like (j/k for navigation).

## Installation

### Chrome

Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/enhanced-keyboard-navigat/cohamjploocgoejdfanacfgkhjkhdkek).

See below for downloading a release and installing it manually (not recommended since you won't get updates automatically).

#### Installing from a release

1. Download the latest release from https://github.com/infokiller/web-search-navigator/releases
1. Extract the zip file to any directory you'd like, though you need to make sure the directory is not deleted while you want to use the extension
1. Go to extensions page in Chrome (URL: `chrome://extensions`)
1. Enable developer mode if needed
1. Disable other existing instances of Google Search Navigator (from the store or from loading another unpacked version)
1. Click "Load Unpacked" and select the directory you extracted the release zip into

### Firefox

Install from the [Add-ons for Firefox](https://addons.mozilla.org/firefox/addon/web-search-navigator/).

### Edge

Install from the [Microsoft Store](https://www.microsoft.com/store/apps/9P0PTV58KND9).

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
*	`z h` / `Ctrl+Shift+h`: Filter results by past hour
*	`z d` / `Ctrl+Shift+d`: Filter results by past 24 hours (day)
*	`z w` / `Ctrl+Shift+w`: Filter results by past week
*	`z m` / `Ctrl+Shift+m`: Filter results by past month
*	`z y` / `Ctrl+Shift+y`: Filter results by past year
*	`z z` / `Ctrl+Shift+a`: Turn off filter (show all results)
*	`z s` / `Ctrl+Shift+s`: Toggle sort by date/relevance (only when filtering)

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
yarn build --env production
```

The automated build scripts are currently not implemented so manual process is required afterward.

## TODO

*   Add option for navigating "Top stories"

## Privacy policy

See [PRIVACY_POLICY.md](./docs/PRIVACY_POLICY.md).

## Trademarks notice

This project is not affiliated with Google LLC.

©2018 Google LLC All rights reserved. Google™ search is a trademark of Google LLC.
