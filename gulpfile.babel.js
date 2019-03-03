import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import cssBase64 from 'gulp-css-base64';
import uglifycss from 'gulp-uglifycss';
import cssInject from 'gulp-proxy-inject-css';

const inject = cssInject('github.com');

export const build = () => {
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
};


export const livereload = () => {
  return gulp.src(['./scss/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(cssBase64({ baseDir: './img', extensionsAllowed: ['.png'] }))
    .pipe(uglifycss())
    .pipe(inject());
};


export const watch = () => {
  gulp.watch(['./scss/**/*.scss', './scss/*.scss'], { ignoreInitial: false }, livereload);
};
