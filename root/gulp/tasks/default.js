'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    global.isWatching = true;

    runSequence(
        'sass',
        'watch',
        'browser-sync',
        cb);
});