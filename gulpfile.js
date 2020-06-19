'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const minimalist = require('minimist');

const argv = minimalist(process.argv.slice(2));

const getExtraFiles = (env) => {
  if (env === 'production') {
    return [
      'node_modules/mousetrap/mousetrap.min.js',
      // Global bind requires to handle keypresses inside search box
      'node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js',
      'node_modules/webextension-polyfill/dist/browser-polyfill.js',
    ];
  }
  return [
    'node_modules/mousetrap/mousetrap.js',
    // Global bind requires to handle keypresses inside search box
    'node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.min.js',
    'node_modules/webextension-polyfill/dist/browser-polyfill.min.js',
  ];
};

exports.default = () => {
  return gulp
      .src(getExtraFiles(argv.env))
      // only minify in production
      .pipe(gulpif(argv.env === 'production', uglify()))
      .pipe(gulp.dest('./src'));
};
