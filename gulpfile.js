/*
  godex - build!
*/

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  minify = require('gulp-minify'),
  // directory shortcuts
  data = './src/data/',
  tool = './src/tools/',
  core = './src/core/';

gulp.task('default', function() {
  gulp
    // fetch the data, scripts
    .src([
      data + "*.js",
      tool + "*.js",
      core + "Pokemon.js",
      core + "Gym.js",
      './src/Dex.js',
      './src/Go.js'
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
