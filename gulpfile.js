'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const minimalist = require('minimist');

const argv = minimalist(process.argv.slice(2));

const moustrapJsFiles = [
  'node_modules/mousetrap/mousetrap.js',
  // Global bind requires to handle keypresses inside search box
  'node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js'
]


exports.default = () => {
  return gulp.src(moustrapJsFiles)
      .pipe(gulpif(
          argv.env === 'production', uglify()))  // only minify in production
      .pipe(gulp.dest('./src'));
};
