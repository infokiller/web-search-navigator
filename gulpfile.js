const gulp = require('gulp');
const uglify = require('gulp-uglify');
const util = require('gulp-util');

gulp.task('default', () => {
  return gulp.src('node_modules/keymaster/keymaster.js')
    .pipe(util.env.production ? uglify({output: {comments: true}}) : util.noop())
    .pipe(gulp.dest('./src'));
});
