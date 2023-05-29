# Changelog

As of 2023-05-29, the published versions are `0.5.0` for Chrome and `0.5.1` for
Firefox.

## Unreleased

## 0.5.2

- General: fix auto-select with no initial results
- Gitlab: new experimental support

## 0.5.1

- General: open new tabs in the same tab group of the current tab (issue #524)

## 0.5.0

- Google: fix detecting more results when in the new "continuous results" experience
- Google: fix search box keybindings (#515)
- Google: fix job cards (#406)
- Google: exclude sidebar
- General: don't fail if search result container isn't detected, just write to
  console.
- YouTube: fix navigation in non-grid pages
- YouTube: fix grid navigation in home page (issue #405)
- YouTube: debounce results loading calls
- Brave: fix navigation to images and videos tabs
- Startpage: fix input box selection
- Amazon: fix page navigation buttons
- Github: fix search box selector (still buggy)
- Github: fix navigation/mutation detection

## 0.4.22

- Google: fix navigation in some feature snippets
- YouTube: enable 4-key grid navigation. In addition to the next/previous search
  result keybindings, the two keybindings for the next/previous _page_ are used.
  YouTube has infinite scrolling, so navigating to the next/previous page isn't
  relevant there anyway.

## 0.4.21

- YouTube: fix selection of playlist results (#382)

## 0.4.20

- Google Scholar: fix selection arrow alignment
- YouTube: fix race condition in looking for search results
- YouTube: fix home page list
- YouYube: fix navigation not working after searching from a video
  (https://github.com/infokiller/web-search-navigator/issues/337)
- Better dark mode support
- Google: multiple fixes to support new and changed card types

## 0.4.19

- Google: fix detection of "featured snippets"

## 0.4.18

- Add support for Brave Search
- Google: fix broken vertical cards navigation (top stories, videos, maps)
- Google: fix navigation to Finance tab
- Google: fix navigation to tabs in the "More" pulldown (worked inconsistently)

## 0.4.17

- Google: fix navigation to other tabs following another Google update.

## 0.4.16

- Google: fix navigation to other tabs (images, maps, etc.) following a Google
  update.

## 0.4.15

- YouTube: fix infinite scrolling
- Fix auto select in infinite scroll when last selection is no longer available

## 0.4.14

- Google: add results for Places/Maps
- Google: fix result focus change when navigation back from result to results
  page
- YouTube: fix video pause/resume with space

## 0.4.13

- Google: add options for adding WorldBrain's Memex extension results

## 0.4.12

- Fix issue with options saving

## 0.4.11

- Google: fix duplicate search result matches requiring two presses to navigate

## 0.4.10

- Google: support new cards in news tab and books results

## 0.4.9

- Fix issue where custom keybindings from older versions were wrongly
  interpreted.

## 0.4.8

- Scholar: work in all domains (not just .com)
- Bugfixes

## 0.4.7

- Github: fix double highlighting issue
- Github: add user repositories

## 0.4.6

- Minor visual tweaks in options page

## 0.4.5

- Github support
- Better highlighting in startpage non-default themes

## 0.4.4

- Support for custom CSS rules in options page
- Add keybinding for toggling verbatim search
- Support Amazon next pages
- Bugfixes

## 0.4.3

- Google image search results navigation support

## 0.4.2

- Don't focus on another element if the current one is not visible, only scroll
  to it

## 0.4.1

- _Very_ experimental support for Amazon.

## 0.4.0

- Support for navigating to Top Stories, Twitter, Videos, and callouts
- Support for remapping keys with key sequences
- Experimental support for YouTube, Startpage, and Scholar (optional, needs to
  be enabled in options)
- Bugfixes

## 0.3.3

- Link-opening shortcuts now prefer focused element over the highlighted result.
  Hence it is possible to navigate to sub-results and other links using the
  <kbd><Tab></kbd> key.

## 0.3.2

- Scroll to top of the page when navigating to the "previous" result from the
  first result and wrapping is off.
- Remove "People also ask" results from navigable results.

## 0.3.1

- Fixed unpredictable scrolling in results navigation. See also
  https://github.com/infokiller/web-search-navigator/issues/35
- Fixed scrolling to first result when page is loaded. This fixes an issue where
  the extension would scroll over KP cards (stock data, top stories). See also
  https://github.com/infokiller/web-search-navigator/issues/29

## 0.3.0

- Renamed the extension to comply with the branding guidelines of Google LLC.

## 0.2.15

- Fixed "translate this site"-links being indexed as search results.

## 0.2.14

- Fixed search results matching in a new (or alternate?) Google™ search version.

## 0.2.13

- Fixed "Focus searchbox" shortcut not working in some cases.

## 0.2.12

- Added support for shopping results.

## 0.2.11

- Fixed options not being configurable for Firefox.

## 0.2.9

- Removed tabs permission which caused a scary Chrome warning about a new
  permission in the extension to read "browsing history". The issue was related
  to a new feature for opening a search result in the background- see the
  discussion in https://github.com/infokiller/web-search-navigator/issues/53

NOTE FROM AUTHOR: sorry for that warning, but I can assure you that this
extension DOES NOT READ ANY of your browsing history. You don't need to trust my
word- you can read the source code in
https://github.com/infokiller/web-search-navigator

## 0.2.8

- Changed default key binding of "Open selected result in new window/tab" to
  `Ctrl/⌘ + Shift + Enter/Space`.
- New feature for Navigation to a new tab in background (Ctrl/⌘ + Enter/Space)
- New keybindings for navigating between search result pages
- Added navigation to more tabs: shopping, books, flights, and financial.

## 0.2.5

- Keybindings for navigating to images/videos/maps/news tabs
- Works in encrypted.google.com
