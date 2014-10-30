var compass = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html'),
	gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    distPath = '../dist/',
    rename = require('gulp-rename'),
    jsonminify = require('gulp-jsonminify'),
    wordEnd = ".min",
    webserver = require('gulp-webserver'),
    streamqueue  = require('streamqueue');


gulp.task('default', ['fonts', 'webserver', 'json-minify', 'favicon', 'imagemin', 'compass', 'minifyHtml','scripts', 'watch']);

//JS
gulp.task('scripts', function () {
    return streamqueue({ objectMode: true },
        gulp.src('js/**/angular.js'),
        gulp.src('js/**/angularjs/*.js')
    )
        .pipe(plumber()) 
        .pipe(concat('script.js'))
        .pipe(uglify()) 
        .pipe(rename(function (path) {
            path.basename += wordEnd;
        }))
        .pipe(gulp.dest(distPath + 'js'));
});

//HTML

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
            config_file: 'config.rb'
        }))
        .pipe(autoprefixer({
            browsers: ['> 1%'],
        }))
        .pipe(gulp.dest(distPath + 'css'));

});

// WebServer
gulp.task('webserver', function() {
    gulp.src("../dist")
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
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

//Move json
gulp.task('json-minify', function () {
    return gulp.src(['js/plugins/angularjs/database.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('../dist/js'));
});


// Watch
gulp.task('watch', function () {
    
    gulp.watch('sass/**/**/*.scss', ['compass']);
    gulp.watch('index.html', ['minifyHtml']);
    gulp.watch('js/**/**/*.js', ['scripts']);
    gulp.watch('fonts/**/**', ['fonts']);
    gulp.watch('favicon.ico', ['favicon']);
    gulp.watch('images/**/**', ['imagemin']);
    gulp.watch('js/plugins/angularjs/database.json', ['json']);
});