'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    handleErrors = require('../utils/handle-errors');

gulp.task('compass-dev', function() {
    return gulp.src(config.sass + '/**/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            environment: 'development',
            debug: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.css))
        .pipe(browserSync.reload({stream: true}));
});