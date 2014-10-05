'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    jshint = require('gulp-jshint');

gulp.task('lint', function() {
    return gulp.src([
            config.js + '/**/*.js',
            '!' + config.js + '/libs/**/*.js',
            '!' + config.js + '/main.js',
            '!' + config.js + '/**/*.min.js'
        ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});