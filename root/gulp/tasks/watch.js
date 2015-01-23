'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config.json');

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('watch', ['browserify'], function() {
    gulp.watch(config.dev + 'index.html', ['bs-reload']);
    gulp.watch(config.dev + 'templates/**/*.html', ['browserify']);
    gulp.watch(config.sass + '/**/*.scss', ['compass-dev']);
});