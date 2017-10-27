#!/usr/bin/env bash

##
# This script builds the extension for the Firefox browser.
#
# Usage:
# make-firefox --api-key <JWT issuer> --api-secret <JWT secret> [--id <{UUID}>]
#
# Note: Once package at given version is signed, the version number cannot be
#       reused again.
#
# Requirements:
# - nodejs (current LTS version)
# - npm (already bundled with nodejs)
# - web-ext nodejs package (npm install --global web-ext)
##
echo "Building Google Search Navigator for Firefox"

# copy the sources into the working directory
BIN=build/firefox
OBJ="$BIN/obj"
echo "Copying files..."

# cleanup the previous build
rm -rf "$OBJ"
mkdir -p "$OBJ"

cp src/* "$OBJ"
cp .web-extension-id "$OBJ"

# pack and sign the package
echo "Creating package..."
web-ext sign --source-dir "$OBJ" --artifacts-dir "$BIN" "$@"

echo "Build complete"
