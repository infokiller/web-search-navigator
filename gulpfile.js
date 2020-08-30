'use strict';

/* eslint-env node */

const gulp = require('gulp');
const gulpif = require('gulp-if');
const terser = require('gulp-terser');
const minimalist = require('minimist');

const argv = minimalist(process.argv.slice(2));

const extraFiles = [
  'vendor/webext-dynamic-content-scripts.js',
  'node_modules/mousetrap/mousetrap.js',
  // Global bind requires to handle keypresses inside search box
  'node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js',
  'node_modules/webextension-polyfill/dist/browser-polyfill.js',
];

exports.default = () => {
  return gulp
      .src(extraFiles)
      .pipe(gulpif(argv.env === 'production', terser()))
      .pipe(gulp.dest('./src'));
};
