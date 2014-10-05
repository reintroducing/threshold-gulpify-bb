'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify');

gulp.task('usemin', function() {
    gulp.src(config.dev + 'index.html')
        .pipe(usemin({
            js: [uglify()]
        }))
        .pipe(gulp.dest(config.dist));
});