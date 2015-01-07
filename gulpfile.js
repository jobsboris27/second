'use strict';

var
    gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    notify = require("gulp-notify"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    merge = require('merge-stream'),
    connect = require('gulp-connect'),
    prettify = require('gulp-html-prettify'),
    jsmin = require('gulp-jsmin'),
    del = require('del');

gulp.task('connect', function() {
    connect.server({
        root: ['html', 'css'],
        livereload: true
    });
});

gulp.task('concat', function () {
    gulp.src('./dev/styles/**/*.css')
        .pipe(concatCss("main.css"))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('app/css/'))
        .pipe(notify("Css Optimized!"));
});

gulp.task('jade', function () {
    gulp.src('./dev/tpl/_pages/*.html')
        .pipe(prettify({indent_char: '  ', indent_size: 2}))
        .pipe(gulp.dest('app/'))
        .pipe(notify("Jade Complete!"));
    //.pipe(connect.reload());
});

gulp.task('compress-plugins', function() {
    gulp.src('./dev/scripts/plugins/*.js')
        .pipe(concat('plugins.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/js/'))
        .pipe(notify("Plugins.js Optimized!"));
});

gulp.task('watch', function(){
    gulp.watch('dev/styles/**/*.css', ['concat']);
    gulp.watch('dev/tpl/**/*.html', ['jade']);
    gulp.watch('dev/scripts/plugins/*.js', ['compress-plugins'])
});

gulp.task('default', ['watch']);



