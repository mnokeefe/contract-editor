var gulp = require('gulp'),
    express = require('express'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    jade = require('gulp-jade'),
    rename = require('gulp-rename');

gulp.task('express', function() {
  var app = express();
  app.use(require('connect-livereload')({port: 35729}));
  app.use(express.static(__dirname + '/dist/'));
  app.listen(4000, '0.0.0.0');
});

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
    tinylr.listen(35729);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('styles', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(
      sass({
        includePaths: ['src/sass'],
        errLogToConsole: true
      }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('templates', function() {
  return gulp.src('src/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
  gulp.watch('src/*.jade',['templates']);
  gulp.watch('src/sass/*.scss', ['styles']);
  gulp.watch('dist/*.html', notifyLiveReload);
  gulp.watch('dist/css/*.css', notifyLiveReload);
  gulp.watch('dist/js/*.js', notifyLiveReload);
});

gulp.task('default', ['styles', 'express', 'templates', 'livereload', 'watch'], function() {

});
