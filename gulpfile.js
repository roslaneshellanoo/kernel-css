var gulp    = require('gulp');
var sass    = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

// Sass
gulp.task('sass', function(){
    return sass('./src/style.scss', { sourcemap: true, style: 'compact'})
    //.pipe(stripCssComments())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));

});

// Watch
gulp.task('watch', function(){
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch('./js/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'watch']);