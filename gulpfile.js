var del = require('del'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
	autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html'),
	gulp = require('gulp'),
    plumber = require('gulp-plumber');


gulp.task('default', ['compass', 'watch']);

// Compass + Autoprefixer + Plumber
gulp.task('compass', function() {
    gulp.src('sass/**/**/*.scss')
    .pipe(plumber()) //plumber
    .pipe(compass({
        config_file: 'config.rb'
    }))
    .pipe(gulp.dest('css'));
});

// Compass + Livereload
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('sass/**/**/*.scss', ['compass']);
    gulp.watch('css/fabrique.css').on('change', livereload.changed);
    gulp.watch('index.html').on('change', livereload.changed);
    gulp.watch('js/**/**/*.js').on('change', livereload.changed);
});


gulp.task('dist', ['clean:dist', 'gulp-uglify',  'minify-html', 'autoprefixer', 'imagemin']);


gulp.task('clean:dist', function (cb) {
  del([
    'dist/**'
  ], cb);
});

// Autoprefixer + MinifyCSS + Plumber
gulp.task('autoprefixer', ['clean:dist'], function () {
    gulp.src('css/fabrique.css')
        .pipe(plumber()) // plumber
        .pipe(autoprefixer({
            browsers: ['> 1%'],
        }))
        .pipe(minifyCSS()) //minifyCSS
        .pipe(rename('min.fabrique.css'))
        .pipe(gulp.dest('dist/css/'));
});

// Imagemin + Plumber
gulp.task('imagemin', ['clean:dist'], function () {
    gulp.src('images/**/*')
        .pipe(plumber()) // plumber
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Uglify + Plumber + Concat
gulp.task('gulp-uglify', ['clean:dist'], function () {
    gulp.src('js/**/**/*.js')
        .pipe(plumber()) // plumber
        .pipe(concat('script.js'))// concat
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
    
// minifyHTML + Plumber
gulp.task('minify-html', ['clean:dist'], function () {
    gulp.src('index.html')
        .pipe(plumber()) // plumber
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/'));
});