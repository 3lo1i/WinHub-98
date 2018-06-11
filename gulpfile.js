const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');


gulp.task('build', () => {
  return gulp.src(['./scss/userstyle.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({
      'basename': 'WinHub-98',
      'suffix': '.user'
    }))
    .pipe(gulp.dest('./dist'));
});


gulp.task('watch', () => {
  gulp.watch(['./scss/**/*.scss', './scss/*.scss'], ['build']);
});
