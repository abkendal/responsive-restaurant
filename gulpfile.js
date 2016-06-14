var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function(){
	return gulp.src('styles/*.scss')
			.pipe(sass().on('error',sass.logError))
			.pipe(concat('styles.css'))
			.pipe(gulp.dest('styles/'));
});

gulp.task('watch', function() {
	gulp.watch('styles/*.scss', ['styles']);
});

gulp.task('default', ['watch']);