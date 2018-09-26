# Publish instructions

Guides how to publish the new versions of the extension.

Please, do not release builds of versions for which are not committed. Meaning you should not release a version X when there is no matching commit, where X is denoted in the `manifest.json`. 

# Pre-build

* Just update version number in the `src/manifest.json`. There is no `version` field in the `package.json` so you don't need to worry about it.
* Commit with the message "v1.2.3" with the actual version in it. 

Do this only once for all builds (Chrome, Firefox,...).
 
# Firefox

* After completing pre-build instructions run `./tools/make-firefox.sh`.
* The add-on archive will be placed under `./build/firefox/goole_search_navigator-<version>.zip`.
* Open the [upload new version]((https://addons.mozilla.org/cs/developers/addon/the-web-search-navigator/versions/submit/)) page.
* Only upload the produced archive and click "Continue".
* Provide the version notes and you are done!   
