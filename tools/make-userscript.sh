mkdir -p build/userscript
PTH=$(realpath ../src)
cat $(cat ../src/manifest.json | jq -r ".content_scripts[0].js | map(\"$PTH/\"+.) | .[]") > build/userscript/main.user.js

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

echo "$FINAL" > "build/userscript/userscript-options.js"