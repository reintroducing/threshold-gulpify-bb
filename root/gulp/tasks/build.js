'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(cb) {
    runSequence([
            'clean',
            'sass',
            'browserify'
        ],
        'usemin',
        'copy',
        cb);
});