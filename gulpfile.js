const gulp = require('gulp');
const uglify = require('gulp-uglify');
const util = require('gulp-util');
const moustrapJsFiles = [
	'node_modules/mousetrap/mousetrap.js',
	// Global bind requires to handle keypresses inside search box
	'node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js'
]

gulp.task('default', () => {
	  return gulp.src(moustrapJsFiles)
	    .pipe(util.env.production ? uglify({output: {comments: true}}) : util.noop())
	    .pipe(gulp.dest('./src'));
	});
