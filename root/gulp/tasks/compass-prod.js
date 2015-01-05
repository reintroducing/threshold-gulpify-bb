'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    del = require('del'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    gutil = require('gulp-util');

gulp.task('compass-prod', function() {
    del([config.css + '/main.css'], function(err) {
        gutil.log(gutil.colors.magenta('main.css deleted for re-creation using production mode.'));
    });

    return gulp.src(config.sass + '/**/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            environment: 'production'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest(config.css));
});