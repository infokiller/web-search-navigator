mkdir -p build/userscript
PTH=$(realpath ../src)
cat $(cat ../src/manifest.json | jq -r ".content_scripts[0].js | map(\"$PTH/\"+.) | .[]") > build/userscript/main.user.js

USERSCRIPT_OPTIONS=$(cat "$PTH/userscript-options.js")

OPTIONS_HTML=$(cat "$PTH/options_page.html")
OPTIONS_CSS=$(cat "$PTH/options_page.css")
OPTIONS_JS=$(cat "$PTH/options_page.js")

FINAL=$(echo "${USERSCRIPT_OPTIONS//__OPTIONS_HTML__/$OPTIONS_HTML}")
FINAL=$(echo "${FINAL//__OPTIONS_CSS__/$OPTIONS_CSS}")
FINAL=$(echo "${FINAL//__OPTIONS_JS__/$OPTIONS_JS}")

echo "$FINAL"