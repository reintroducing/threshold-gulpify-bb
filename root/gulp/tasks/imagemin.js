'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    shell = require('gulp-shell');

gulp.task('imagemin', shell.task([
    'imageoptim -d ' + config.img + ' -a -j -q'
]));