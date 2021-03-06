'use strict';

module.exports = function($gulp) {

  var sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename');

  $gulp.task('async', function(done) {
    $gulp
      .src('./node_modules/async/dist/async.js')
      .pipe($gulp.dist('vendor'))
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(sourcemaps.write('./'))
      .pipe($gulp.dist('vendor'))
      .on('end', done);
  });

  return 'async';
};
