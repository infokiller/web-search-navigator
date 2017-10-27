const gulp = require('gulp');

gulp.task('default', () => {
  return gulp.src('node_modules/keymaster/keymaster.js')
    .pipe(gulp.dest('./src'));
});
