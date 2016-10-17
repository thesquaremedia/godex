/*
  godex - build!
*/

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  minify = require('gulp-minify'),
  // directory shortcuts
  main = './src/',
  data = main + 'data/',
  tool = main + 'tools/',
  core = main + 'core/';

gulp.task('default', function() {
  gulp
    // fetch the data, scripts
    .src([
      data + '*.js',

      tool + '_config.js',
      tool + '_helpers.js',

      core + 'Pokemon.js',
      core + 'Move.js',
      core + 'Gym.js',

      // only load files not
      // starting with _
      tool + '[^_]*.js',

      main + 'Dex.js',
      main + 'Go.js'
    ])
    // concat them into godex.js
    .pipe(concat('godex.js'))
    // minify it
    .pipe(minify({
      ext: {
        min: ".min.js"
      }
    }))
    // publish files
    .pipe(gulp.dest('./'));
});
