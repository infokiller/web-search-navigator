'use strict';

// eslint-disable-next-line no-undef
const gulp = require('gulp');
// eslint-disable-next-line no-undef
const gulpif = require('gulp-if');
// eslint-disable-next-line no-undef
const terser = require('gulp-terser');
// eslint-disable-next-line no-undef
const minimalist = require('minimist');

// eslint-disable-next-line no-undef
const argv = minimalist(process.argv.slice(2));

const extraFiles = [
  'vendor/webext-dynamic-content-scripts.js',
  'node_modules/mousetrap/mousetrap.js',
  // Global bind requires to handle keypresses inside search box
  'node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js',
  'node_modules/webextension-polyfill/dist/browser-polyfill.js',
];

// eslint-disable-next-line no-undef
exports.default = () => {
  return gulp
      .src(extraFiles)
      // only minify in production
      .pipe(gulpif(argv.env === 'production', terser()))
      .pipe(gulp.dest('./src'));
};
