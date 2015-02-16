'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config.json');

gulp.task('watch', ['lint', 'browserify'], function() {
    global.isWatching = true;

    gulp.watch(config.dev + 'index.html', browserSync.reload);
    gulp.watch(config.dev + 'templates/**/*.html', ['browserify']);
    gulp.watch(config.sass + '/**/*.scss', ['sass']);
    gulp.watch([
        config.js + '/**/*.js',
        '!' + config.js + '/libs/**/*.js',
        '!' + config.js + '/bundle.js',
        '!' + config.js + '/**/*.min.js'
    ], ['lint']);
});