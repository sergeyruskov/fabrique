var compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
	autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html'),
	gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    distPath = '../dist/',
    rename = require('gulp-rename'),
    wordEnd = ".min";


gulp.task('default', ['fonts', 'minifyAngularTemplates', 'favicon', 'watch', 'imagemin', 'compass', 'minifyHtml','scripts']);

//JS
gulp.task('scripts', function () {
    gulp.src('js/**/**/*.js')
        .pipe(plumber()) 
        .pipe(concat('script.js'))
        .pipe(uglify()) 
        .pipe(rename(function (path) {
            path.basename += wordEnd;
        }))
        .pipe(gulp.dest(distPath + 'js'));
});

//HTML
gulp.task('minifyAngularTemplates', function () {
    gulp.src('js/plugins/templates/*.html')
        .pipe(plumber()) 
        .pipe(minifyHTML())
        .pipe(gulp.dest(distPath + '/js/plugins/templates'));
});

gulp.task('minifyHtml', function () {
    gulp.src('index.html')
        .pipe(plumber()) 
        .pipe(minifyHTML())
        .pipe(gulp.dest(distPath));
});


// Compass
gulp.task('compass',  function () {

    gulp.src('sass/fabrique.min.scss')
        .pipe(plumber()) 
        .pipe(compass({
            config_file: 'config.rb',
            css: '../dist/css/',
            sourcemap: true
        }))
        .pipe(autoprefixer({
            browsers: ['> 1%'],
        }))
        .pipe(gulp.dest(distPath + 'css'));

});


// Imagemin
gulp.task('imagemin',  function () {
    gulp.src('images/**/**')
        .pipe(plumber()) 
        .pipe(imagemin())
        .pipe(gulp.dest(distPath + 'images'));
});

//Move fonts
gulp.task('fonts', function () {
    gulp.src("fonts/**/**")
    .pipe(rename(function (path) {}))
    .pipe(gulp.dest(distPath + 'fonts')); 
});

//Move favicon
gulp.task('favicon', function () {
    gulp.src("favicon.ico")
    .pipe(rename(function (path) {}))
    .pipe(gulp.dest(distPath)); 
});


// Watch
gulp.task('watch', function () {
    livereload.listen();
    
    gulp.watch('sass/**/**/*.scss', ['compass']);
    gulp.watch('index.html', ['minifyHtml']);
    gulp.watch('js/**/**/*.js', ['scripts']);
    gulp.watch('fonts/**/**', ['fonts']);
    gulp.watch('favicon.ico', ['favicon']);
    gulp.watch('images/**/**', ['imagemin']);
    gulp.watch('js/plugins/templates/*.html', ['minifyAngularTemplates']);

    gulp.watch(distPath + 'images/**/**').on('change', livereload.changed);
    gulp.watch(distPath + 'js/plugins/templates/**').on('change', livereload.changed);
    gulp.watch(distPath + 'fonts/**/**').on('change', livereload.changed);
    gulp.watch(distPath + 'favicon.ico').on('change', livereload.changed);
    gulp.watch(distPath + 'css/fabrique' + wordEnd + '.css').on('change', livereload.changed);
    gulp.watch(distPath + 'index.html').on('change', livereload.changed);
    gulp.watch(distPath + 'js/script' + wordEnd + '.js').on('change', livereload.changed);
});