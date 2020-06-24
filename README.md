# ![Logo](./src/icon48.png?raw=true) Web Search Navigator

![Demo flow](./assets/demo.gif?raw=true)

Browser extension that adds keyboard shortcuts to Google search, Youtube, Github, Amazon, Google Scholar, and Startpage.

Google used to provide experimental keyboard navigation, but it was [often broken](https://goo.gl/1zMkYu), and was [removed as of 2017-07-31](https://stackoverflow.com/a/45513198/1014208).
In addition, I wanted to add new keyboard shortcuts and change the existing ones to be
vim-like (j/k for navigation).

## Table of contents

- [Features](#features)
- [Installation](#installation)
  - [Chrome](#chrome)
    - [Installing from a release](#installing-from-a-release)
  - [Firefox](#firefox)
  - [Edge](#edge)
- [Keybindings](#keybindings)
- [Development](#development)
  - [Coding style](#coding-style)
  - [Building for development](#building-for-development)
  - [Building a release](#building-a-release)
  - [Adding a new search engine](#adding-a-new-search-engine)
- [Privacy policy](#privacy-policy)
- [Trademarks notice](#trademarks-notice)

## Features

- Lightweight
- Supports Chrome, Firefox, and pre-Chromium Edge
- Extensive Google keyboard shortcuts including:
  - Selecting results
  - Opening results in the background or foreground
  - Navigating to other sections (maps/news/videos/etc)
  - Navigating to the next/previous result page
  - Changing time restrictions
- Support for navigating cards such as Top Stories, Twitter, and videos
- All keyboard shortcuts can be changed
- Settings are synched between devices with the same browser profile
- Supports both key combos and key sequences
- Experimental and optional support for Youtube, Startpage, Google Scholar, Github, and Amazon.com (needs to be enabled in the options). Note that the extension does not have permissions for these optional websites unless you explicitly enable them.

## Installation

### Chrome

Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/enhanced-keyboard-navigat/cohamjploocgoejdfanacfgkhjkhdkek).

See below for downloading a release and installing it manually (not recommended since you won't get updates automatically).

#### Installing from a release

1. Download the latest release from https://github.com/infokiller/web-search-navigator/releases
1. Extract the zip file to any directory you'd like, though you need to make sure the directory is not deleted while you want to use the extension
1. Go to extensions page in Chrome (URL: `chrome://extensions`)
1. Enable developer mode if needed
1. Disable other existing instances of Web Search Navigator (from the store or from loading another unpacked version)
1. Click "Load Unpacked" and select the directory you extracted the release zip into

### Firefox

Install from the [Add-ons for Firefox](https://addons.mozilla.org/firefox/addon/web-search-navigator/).

### Edge

Install from the [Microsoft Store](https://www.microsoft.com/store/apps/9P0PTV58KND9).

## Keybindings

_Note: All shortcuts can be customized to your liking via options._

- `↓`/`j`: Select next search result
- `↑`/`k`: Select previous previous result
- `/`/`Escape`: Focus on input search box
- `Enter`/`Space`: Navigate to selected result
- `Ctrl+Enter`/`⌘+Enter`/`Ctrl+Space`: Open selected result in background tab
- `Ctrl+Shift+Enter`/`⌘+Shift+Enter`/`Ctrl+Shift+Space`: Open selected result in new window/tab
- `←`/`h`: Navigate to previous search result page
- `→`/`l`: Navigate to next search result page
- `a`/`s`: Navigate to All tab (= default search tab)
- `i`: Navigate to images tab
- `v`: Navigate to videos tab
- `m`: Navigate to maps tab
- `n`: Navigate to news tab
- `alt+s`: Navigate to shopping tab
- `b`: Navigate to books tab
- `alt+l`: Navigate to flights tab
- `f`: Navigate to financial tab
- `z h` / `Ctrl+Shift+h`: Filter results by past hour
- `z d` / `Ctrl+Shift+d`: Filter results by past 24 hours (day)
- `z w` / `Ctrl+Shift+w`: Filter results by past week
- `z m` / `Ctrl+Shift+m`: Filter results by past month
- `z y` / `Ctrl+Shift+y`: Filter results by past year
- `z z` / `Ctrl+Shift+a`: Turn off filter (show all results)
- `z s` / `Ctrl+Shift+s`: Toggle sort by date/relevance (only when filtering)

## Development

### Coding style

We use a coding style based on [Google's](https://google.github.io/styleguide/jsguide.html) that is enforced with [eslint](https://eslint.org/). Please try to write your code in a similar style, and run eslint before sending a pull request.

### Building for development

We use [yarn](https://yarnpkg.com/) package manager for dependency management and [gulp](https://gulpjs.com/) for building.
To build the extension for development run:

```sh
yarn install && yarn build
```

The extension will be deployed directly to the `src` directory.

The easiest way to run the built extension is to use `web-ext` which will run a separate it in a separate browser profile. From the project root directory:

```sh
# Replace '--target chromium' with "--target firefox-desktop" for Firefox.
yarn run web-ext run --source-dir src --start-url 'https://www.google.com/search?q=whatever' --target chromium
```

Alternatively, you can load this directory as an unpacked extensions to your browser.

_It would be better to deploy for example to `build/deploy` and add `gulp-watch` to update the deployed files
automatically. However when done so the browser's (Chrome) auto-reload extension gets broken and one has to reload the
extension manually on every change. Hence the `src` directory is used for the convenience._

### Building a release

To build a bundle consumable by the browser with minified dependencies:

```sh
# Replace make-chrome.sh with make-firefox.sh for Firefox
yarn install && yarn build --env production && ./tools/make-chrome.sh
```

Then, upload the bundle to the browser store from `./build/chrome/package.zip`/`./build/firefox/package.zip`.

### Adding a new search engine

See a [reference commit with minimal changes for amazon.com](https://github.com/infokiller/web-search-navigator/commit/f57a7e4aedf66d8395995671ef4f18f3e93333b0). Specific steps:

- Add the required URLs to the `optional_permissions` key in [`src/manifest.json`](./src/manifest.json)
- Add a checkbox for enabling it to [`src/options_page.html`](./src/options_page.html) (copy an existing one and modify it)
- Add code to [`src/options_page.js`](./src/options_page.js) for handling the permission request
- Add a new class to [`src/search_engines.js`](./src/search_engines.js) with the required properties. See the documentation at the top of the file and use the other search engines classes in that file as a reference.
- Add a class instance to [`searchEngines`](https://github.com/infokiller/web-search-navigator/blob/60d64947b07381e0be61df657c4de4a85ccfc2a7/src/search_engines.js#L542).

## Privacy policy

See [PRIVACY_POLICY.md](./docs/PRIVACY_POLICY.md).

## Trademarks notice

This project is not affiliated with Google LLC.

©2020 Google LLC All rights reserved. Google™ search is a trademark of Google LLC.
