'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
gulp.task('default', function(){
    browserSync({
        open: 'external',
        port: 1153,
        ghostMode: false,
        server: {
            baseDir: './app'
        }
    });
    gulp.watch('./app/**').on('change', browserSync.reload);
});