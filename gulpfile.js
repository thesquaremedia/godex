/*
  godex - build!
*/

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  minify = require('gulp-minify'),
  // directory shortcuts
  data = './src/data/*.js',
  scripts = './src/*.js';

gulp.task('default', function() {
  gulp
    // fetch the data, scripts
    .src([ data, scripts ])
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