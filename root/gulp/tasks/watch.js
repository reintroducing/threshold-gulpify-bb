'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config.json');

gulp.task('watch', ['lint', 'browserify'], function() {
    gulp.watch(config.dev + 'index.html', browserSync.reload);
    gulp.watch(config.dev + 'templates/**/*.html', ['browserify']);
    gulp.watch(config.sass + '/**/*.scss', ['compass-dev']);
    gulp.watch([
        config.js + '/**/*.js',
        '!' + config.js + '/libs/**/*.js',
        '!' + config.js + '/main.js',
        '!' + config.js + '/**/*.min.js'
    ], ['lint']);
});