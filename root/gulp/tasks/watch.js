'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    config = require('../config.json');

gulp.task('watch', function() {
    global.isWatching = true;

    watch(config.dev + 'index.html', function(files, cb) {
            browserSync.reload();
        });

    watch(config.dev + 'templates/**/*.html', function(files, cb) {
            gulp.start('browserify', cb);
        });

    watch(config.sass + '/**/*.scss', function(files, cb) {
            gulp.start('compass-dev', cb);
        });

    watch([
            config.js + '/**/*.js',
            '!' + config.js + '/main.js'
        ], function(files, cb) {
            gulp.start('lint', cb);
            gulp.start('browserify', cb);
        });
});