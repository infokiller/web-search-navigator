#!/usr/bin/env bash

OUTDIR="../build/userscript"
mkdir -p $OUTDIR
OUTDIR=$(realpath $OUTDIR)
PTH=$(realpath ../src)

# Get libraries for some reason that are gitignored
curl https://raw.githubusercontent.com/ccampbell/mousetrap/master/mousetrap.min.js > $PTH/mousetrap.js
curl https://unpkg.com/webextension-polyfill@0.12.0/dist/browser-polyfill.min.js > $PTH/browser-polyfill.js
curl https://raw.githubusercontent.com/ccampbell/mousetrap/master/plugins/global-bind/mousetrap-global-bind.min.js > $PTH/mousetrap-global-bind.js
cp "../vendor/webext-dynamic-content-scripts.js" $PTH/webext-dynamic-content-scripts.js

if ! command -v uglifyjs &> /dev/null
then
    echo "uglify-js could not be found, installing"
    pnpm i -g uglify-js
fi

key(){
    cat ../src/manifest.json | jq -r "$1"
}

ICONPATH="$PTH/$(key '.icons["16"]')"
mimetype=$(file -bN --mime-type $ICONPATH)
content=$(cat $ICONPATH | base64 -w0)
DATAURL="data:$mimetype;base64,$content"

US=$OUTDIR/main.user.js
echo "// ==UserScript==" > $US
echo "// @name        $(key '.name')" >> $US
echo "// @version     $(key '.version')" >> $US
echo "// @description $(key '.description')" >> $US
echo "// @author      $(key '.author')" >> $US
echo "// @iconURL     $DATAURL" >> $US
key ".content_scripts[0].matches | map(\"// @match       \"+.) | .[]" >> $US
key ".optional_permissions | map(\"// @match       \"+.) | .[]" >> $US
echo "// ==/UserScript==" >> $US
# | uglifyjs -c
cat $(key ".content_scripts[0].js | map(\"$PTH/\"+.) | .[]") >> $US

USERSCRIPT_OPTIONS=$(cat "$PTH/userscript-options.js")

OPTIONS_HTML=$(cat "$PTH/options_page.html" | base64)
OPTIONS_CSS=$(cat "$PTH/options_page.css" | base64)
OPTIONS_PAGE_JS=$(cat "$PTH/options_page.js" | base64)
OPTIONS_JS=$(cat "$PTH/options.js" | base64)
BROWSER_POLYFILL_JS=$(cat "$PTH/userscript-polyfill.js" "$PTH/browser-polyfill.js" | base64)

FINAL=$(echo "${USERSCRIPT_OPTIONS//__OPTIONS_HTML__/$OPTIONS_HTML}")
FINAL=$(echo "${FINAL//__OPTIONS_CSS__/$OPTIONS_CSS}")
FINAL=$(echo "${FINAL//__OPTIONS_JS__/$OPTIONS_JS}")
FINAL=$(echo "${FINAL//__OPTIONS_PAGE_JS__/$OPTIONS_PAGE_JS}")
FINAL=$(echo "${FINAL//__BROWSER_POLYFILL_JS__/$BROWSER_POLYFILL_JS}")

# echo "$FINAL" > "$OUTDIR/userscript-options.js"
echo "" >> $US
echo "" >> $US
echo "" >> $US
echo "$FINAL" >> $US
