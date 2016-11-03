/* 
"devDependencies": {
    
  }
npm init
npm install gulp gulp-sass gulp-sourcemaps gulp-autoprefixer gulp-tinypng-compress gulp-livereload gulp-server-livereload --save-dev
*/
"use strict";
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    tinypng = require('gulp-tinypng-compress'),
    sourcemaps = require('gulp-sourcemaps'),
    server = require('gulp-server-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

gulp.task('sass', function () {
  gulp.src('sass/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
            browsers: ['last 7 versions'],
            cascade: false
        }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css/'));
});

gulp.task('tinypng', function () {
    gulp.src('images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'KpaEMOnqEvuKLm8KiTI6J_UAFKNqlUTY', //XRZuqyo6VWQvcOmvYPYprQBjS1GUcgy- ; P3jx6VFnO6SllhgMm1gktt1olcJDTYDs ;73fEeflGGhHyRfftICpYXfKDG85FCcE2
            sameDest: true,
            log: true,
            sigFile: 'images/.tinypng-sigs',
            summarise: true
        }))
        .pipe(gulp.dest('images'));
});
gulp.task('html', function () {
    gulp.src('index.html')
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('sass/*.scss', ['sass']).on('change', livereload.changed);

  gulp.watch('index.html', ['html']).on('change', livereload.changed);
})

// Default Task
gulp.task('default', ['sass',  'watch']);