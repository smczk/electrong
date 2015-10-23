var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('gulp-babel')
var watch = require('gulp-watch')
var plumber = require('gulp-plumber')

gulp.task('default', ['build']);

gulp.task('build', ['build:js', 'build:html', 'build:css'])

gulp.task('build:js', function() {
  gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('app'))
});

gulp.task('build:html', function() {
  gulp.src('src/**/*.html')
    .pipe(plumber())
    .pipe(gulp.dest('app'))
});

gulp.task('build:css', function() {
  gulp.src('src/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('app'))
});

gulp.task('watch', ['build'], function() {
    gulp.watch('src/**/*', ['build']);
});
