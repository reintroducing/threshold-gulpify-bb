'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    runSequence([
            'compass-dev',
            'lint',
            'browserify'
        ],
        'browser-sync',
        'watch',
        cb);
});