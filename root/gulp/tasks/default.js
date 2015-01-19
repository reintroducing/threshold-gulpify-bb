'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    global.isWatching = true;

    runSequence([
            'compass-dev',
            'browserify'
        ],
        'browser-sync',
        'watch',
        cb);
});