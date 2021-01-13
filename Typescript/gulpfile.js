const {src, dest, watch, series} = require('gulp');
const autoprefix = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const sync = require('browser-sync').create();
const del = require('del');
const webpack = require('webpack-stream');

const SRC_CSS_FILES = 'src/css/**.css';
const SRC_TS_FILES  = './src/ts/**.ts';
const DIST_CSS_DIR  = './dist/css/';
const DIST_JS_DIR   = './dist/js/';

const js = () => {
  return src(SRC_TS_FILES)
  .pipe(webpack(
    require('./webpack.config.js')
  ))
  .pipe(dest(DIST_JS_DIR))
  ;
}

const css = () => {
  return src(SRC_CSS_FILES)
  .pipe(autoprefix({
    overrideBrowserslist: ['last 2 versions']
  }))
  .pipe(csso())
  .pipe(dest(DIST_CSS_DIR))
  ;
}

const clear = () => {
  return del(DIST_CSS_DIR);
}

const build = series(clear, css, js);

const serve = () => {
  sync.init({
    server: './',
  });
  watch(SRC_CSS_FILES, series(css)).on('change', sync.reload);
  watch(SRC_TS_FILES, series(js)).on('change', sync.reload);
}

module.exports = {
  js, css, serve, build,
};
