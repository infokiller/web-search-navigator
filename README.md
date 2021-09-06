# ![Logo](./src/icon48.png?raw=true) Web Search Navigator

[![CodeFactor](https://www.codefactor.io/repository/github/infokiller/web-search-navigator/badge)](https://www.codefactor.io/repository/github/infokiller/web-search-navigator)

Browser extension that adds configurable keyboard shortcuts to Google search,
YouTube, Startpage, Brave Search, Google Scholar, Github, and Amazon.

![Demo flow](./assets/demo.gif?raw=true)

## Table of contents

- [Table of contents](#table-of-contents)
- [Features](#features)
- [Installation](#installation)
  - [Chrome](#chrome)
    - [Installing from a release](#installing-from-a-release)
  - [Firefox](#firefox)
  - [Edge](#edge)
- [Keybindings](#keybindings)
- [Development](#development)
  - [Coding style](#coding-style)
  - [Commit messages](#commit-messages)
  - [Building for development](#building-for-development)
  - [Building a release](#building-a-release)
  - [Adding a new search engine](#adding-a-new-search-engine)
- [Troubleshooting](#troubleshooting)
- [Privacy policy](#privacy-policy)
- [Trademarks notice](#trademarks-notice)

## Features

- Lightweight
- Supports Chrome, Firefox, and Edge
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
- Custom CSS rules to control the look of highlighted results
- Experimental and optional support for YouTube, Startpage, Brave Search, Google
  Scholar, Github, and Amazon (needs to be enabled in the options). Note that
  the extension does not have permissions for these optional websites unless you
  explicitly enable them.

## Installation

### Chrome

Install from the
[Chrome Web Store](https://chrome.google.com/webstore/detail/enhanced-keyboard-navigat/cohamjploocgoejdfanacfgkhjkhdkek).

See below for downloading a release and installing it manually (not recommended
since you won't get updates automatically).

#### Installing from a release

1. Download the latest release from
   <https://github.com/infokiller/web-search-navigator/releases>
1. Extract the zip file to any directory you'd like, though you need to make
   sure the directory is not deleted while you want to use the extension
1. Go to extensions page in Chrome (URL: `chrome://extensions`)
1. Enable developer mode if needed
1. Disable other existing instances of Web Search Navigator (from the store or
   from loading another unpacked version)
1. Click "Load Unpacked" and select the directory you extracted the release zip
   into

### Firefox

Install from the
[Add-ons for Firefox](https://addons.mozilla.org/firefox/addon/web-search-navigator/).

### Edge

Install from
[Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/inkjbmhmeghalgpacijccmbmbclkjgop).

## Keybindings

> NOTE:
>
> - Shortcuts for navigation to tabs (images, news, etc.) only work when the tab
>   is visible.
> - All shortcuts can be customized to your liking via options

| Shortcuts                                                                                                                                                      | Action                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| <kbd>↓</kbd>/<kbd>j</kbd>                                                                                                                                      | Select next search result                           |
| <kbd>↑</kbd>/<kbd>k</kbd>                                                                                                                                      | Select previous search result                       |
| <kbd>/</kbd>/<kbd>Escape</kbd>                                                                                                                                 | Focus on input search box                           |
| <kbd>Enter</kbd>/<kbd>Space</kbd>                                                                                                                              | Navigate to selected result                         |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd>/<kbd>⌘</kbd> + <kbd>Enter</kbd>/<kbd>Ctrl</kbd> + <kbd>Space</kbd>                                                          | Open selected result in background tab              |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd>/<kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> | Open selected result in new window/tab              |
| <kbd>←</kbd>/<kbd>h</kbd>                                                                                                                                      | Navigate to previous search result page             |
| <kbd>→</kbd>/<kbd>l</kbd>                                                                                                                                      | Navigate to next search result page                 |
| <kbd>a</kbd>/<kbd>s</kbd>                                                                                                                                      | Navigate to All tab (= default search tab)          |
| <kbd>i</kbd>                                                                                                                                                   | Navigate to images tab                              |
| <kbd>v</kbd>                                                                                                                                                   | Navigate to videos tab                              |
| <kbd>m</kbd>                                                                                                                                                   | Navigate to maps tab                                |
| <kbd>n</kbd>                                                                                                                                                   | Navigate to news tab                                |
| <kbd>Alt</kbd> + <kbd>s</kbd>                                                                                                                                  | Navigate to shopping tab                            |
| <kbd>b                                                                                                                                                         | Navigate to books tab                               |
| <kbd>Alt</kbd> + <kbd>l</kbd>                                                                                                                                  | Navigate to flights tab                             |
| <kbd>f</kbd>                                                                                                                                                   | Navigate to financial tab                           |
| <kbd>z</kbd> + <kbd>h</kbd>                                                                                                                                    | Filter results by past hour                         |
| <kbd>z</kbd> + <kbd>d</kbd>                                                                                                                                    | Filter results by past 24 hours (day)               |
| <kbd>z</kbd> + <kbd>w</kbd>                                                                                                                                    | Filter results by past week                         |
| <kbd>z</kbd> + <kbd>m</kbd>                                                                                                                                    | Filter results by past month                        |
| <kbd>z</kbd> + <kbd>y</kbd>                                                                                                                                    | Filter results by past year                         |
| <kbd>z</kbd> + <kbd>z</kbd>                                                                                                                                    | Turn off filter (show all results)                  |
| <kbd>z</kbd> + <kbd>s</kbd>                                                                                                                                    | Toggle sort by date/relevance (only when filtering) |

## Development

### Coding style

To check the code for linting and formatting errors, run `yarn run check`. We
use a Javascript coding style based on
[Google's](https://google.github.io/styleguide/jsguide.html). We use the
following tools to lint the code enforce a consistent style:

- Javascript: [eslint](https://eslint.org/) for both linting and formatting
- CSS: [Stylelint](https://stylelint.io/) for linting and
  [Prettier](https://prettier.io/) for formatting
- Markdown: [Markdownlint](https://github.com/igorshubovych/markdownlint-cli)
  for linting and [Prettier](https://prettier.io/) for formatting
- Bash: [Shellcheck](https://github.com/koalaman/shellcheck) for linting and
  [shfmt](https://github.com/mvdan/sh) for formatting

Please try to write your code in a similar style, and run `yarn run check`
before sending a pull request.

### Commit messages

Starting from 2020-07-19, this project uses
[Conventional Commits](https://www.conventionalcommits.org/). Please write all
you commit messages in this style.

### Building for development

We use [yarn](https://yarnpkg.com/) package manager for dependency management
and [gulp](https://gulpjs.com/) for building. To build the extension for
development run:

```sh
yarn install && yarn build
```

The extension will be deployed directly to the `src` directory.

The easiest way to run the built extension is to use `web-ext` which will run a
separate it in a separate browser profile and reload it automatically on changes
to the source files. From the project root directory:

```sh
# Replace '--target chromium' with "--target firefox-desktop" for Firefox.
yarn run web-ext run --source-dir src --target chromium \
  --start-url 'https://www.google.com/search?q=whatever'
```

Alternatively, you can load this directory as an unpacked extensions to your
browser.

_It would be better to deploy for example to `build/deploy` and add `gulp-watch`
to update the deployed files automatically. However when done so the Chrome's
auto-reload extension gets broken and one has to reload the extension manually
on every change. Hence the `src` directory is used for the convenience._

### Building a release

To build a bundle consumable by the browser with minified dependencies:

```sh
# Replace make-chrome.sh with make-firefox.sh for Firefox
yarn install && yarn build --env production && ./tools/make-chrome.sh
```

Then, upload the bundle to the browser store from
`./build/chrome/package.zip`/`./build/firefox/package.zip`.

### Adding a new search engine

See a
[reference commit with minimal changes for amazon.com](https://github.com/infokiller/web-search-navigator/commit/f57a7e4aedf66d8395995671ef4f18f3e93333b0).
Specific steps:

- Add the required URLs to the `optional_permissions` key in
  [`src/manifest.json`](./src/manifest.json)
- Add a checkbox for enabling it to
  [`src/options_page.html`](./src/options_page.html) (copy an existing one and
  modify it)
- Add code to [`src/options_page.js`](./src/options_page.js) for handling the
  permission request
- Add a new class to [`src/search_engines.js`](./src/search_engines.js) with the
  required properties. See the documentation at the top of the file and use the
  other search engines classes in that file as a reference.
- Add a class instance to
  [`searchEngines`](https://github.com/infokiller/web-search-navigator/blob/60d64947b07381e0be61df657c4de4a85ccfc2a7/src/search_engines.js#L542).

## Troubleshooting

Before reporting a bug, please check and answer the following:

- Does it happen when you disable other extensions?
- Does it happen only in Chrome, only in Firefox, or both?

In addition, please try to reproduce the bug in a clean browser profile with no
other extensions. The easiest way to do it is to clone the repo and use
`web-ext`:

```sh
git clone https://github.com/infokiller/web-search-navigator
cd web-search-navigator
yarn install && yarn build
# Replace chromium with firefox-desktop for firefox
yarn run web-ext run --source-dir src --target chromium
```

This will open a clean browser instance with no other extensions. Note that this
browser instance will have the default extension options (including permissions
for alternative search engines), so you may need to modify the option.

## Privacy policy

See [PRIVACY_POLICY.md](./docs/PRIVACY_POLICY.md).

## Trademarks notice

This project is not affiliated with Google LLC.

©2021 Google LLC All rights reserved. Google™ search is a trademark of Google
LLC.
