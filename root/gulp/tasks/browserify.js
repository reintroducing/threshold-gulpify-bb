'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    config = require('../config.json'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    browserSync = require('browser-sync'),
    handleErrors = require('../utils/handle-errors');

gulp.task('browserify', function() {
    var bundler = browserify({
            cache: {},
            packageCache: {},
            fullPaths: true,
            entries: [config.dev + config.js + '/app.js'],
            debug: global.isWatching
        }),
        bundle = function() {
            return bundler
                .bundle()
                .on('error', handleErrors)
                .pipe(source('main.js'))
                .pipe(gulp.dest(config.js))
                .pipe(gulpif(global.isWatching, browserSync.reload({stream: true})));
        };

    // commented out due to https://github.com/substack/watchify/issues/82
    // if (global.isWatching) {
    //     bundler = watchify(bundler);
    //     bundler.on('update', bundle);
    // }

    return bundle();
});