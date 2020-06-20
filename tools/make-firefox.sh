#!/usr/bin/env bash

# This script builds the extension for the Firefox browser.
#
# Usage:
# make-firefox --api-key <JWT issuer> --api-secret <JWT secret> [--id <{UUID}>]
#
# NOTE: Once the package at a given version is signed, the version number cannot
# be reused again.
#
# Requirements:
# - nodejs (current LTS version)
# - yarn
# - web-ext nodejs package (installed by default when you install project
#   dependencies with `yarn install`)

echo 'Building Web Search Navigator for Firefox'

# copy the sources into the working directory
BIN=build/firefox
OBJ="$BIN/obj"
echo 'Copying files...'

# cleanup the previous build
rm -rf "$OBJ"
mkdir -p "$OBJ"

cp -R src/* "$OBJ"

# build and pack the package
# do not sign as it would result in signed add-on intended for self-distribution
echo 'Creating package...'
yarn run web-ext build --source-dir "$OBJ" --artifacts-dir "$BIN" "$@"

echo 'Build complete'
