var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css');
var cssWrap = require('gulp-css-wrap');
var themeName = 'green2'
var customThemeName = `${themeName}-theme`
var customThemeClassName = `.${customThemeName}`

gulp.task('css-wrap', function () {
  // 移动config.json 到自定义主题目录
  gulp.src(path.resolve(`./${themeName}/config.json`))
    .pipe(gulp.dest(customThemeName))
  return gulp.src(path.resolve(`./${themeName}/theme/index.css`))
    .pipe(cssWrap({ selector: customThemeClassName }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(customThemeName))
});

gulp.task('move-font', function () {
  return gulp.src([`./${themeName}/theme/fonts/**`]).pipe(gulp.dest(`${customThemeName}/fonts`));
});

gulp.task('default', ['css-wrap', 'move-font']);
