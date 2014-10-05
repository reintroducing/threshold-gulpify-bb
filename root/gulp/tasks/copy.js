'use strict';

var gulp = require('gulp'),
    config = require('../config.json');

gulp.task('copy', function() {
    return gulp.src([
            config.img + '/**',
            config.css + '/fonts/**',
            '.favicon.ico',
            '.htaccess',
            '!node_modules/**',
            '!_internal/**'
        ], {base: '.'})
        .pipe(gulp.dest(config.dist));
});