const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cssBase64 = require('gulp-css-base64');
const uglifycss = require('gulp-uglifycss');


gulp.task('build', () => {
  return gulp.src(['./scss/userstyle.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(cssBase64({ baseDir: './img', extensionsAllowed: ['.png'] }))
    .pipe(uglifycss({
      'maxLineLen': 80,
      'cuteComments': true,
      'comments': 'license'
    }))
    .pipe(rename({
      'basename': 'WinHub-98',
      'suffix': '.user'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  gulp.watch(['./scss/**/*.scss', './scss/*.scss'], ['build']);
});
