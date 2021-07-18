'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');

//Styles Task
gulp.task('scss', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/css'))
        // .pipe(browserSync.stream())
        .pipe(reload({stream: true}));

});

//JS Task
gulp.task('js', () => {
	return gulp.src('./src/js/main.js')
        .on('error',notify.onError({
            message: "Error: <%= error.message %>",
            title: 'Error in JS 💀'
        }))
        //Merge files into one
        .pipe(concat('main.js'))
        //JS minification
        .pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
        // .pipe(browserSync.stream())
		.pipe(reload({stream: true}));

});

//BrowserSync Task
gulp.task('bs', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('./src/js/main.js', gulp.series('js'));
    gulp.watch('*.html').on('change', browserSync.reload);
});

//Watch Task
gulp.task('default', gulp.series('js','bs', 'scss'), () => {
    gulp.watch('./src/js/*.js', gulp.series('js'));
    gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('./dist/css/style.css',reload);
});
