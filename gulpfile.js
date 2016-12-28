var gulp    = require('gulp');
var sass    = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

// Sass
gulp.task('sass', function(){
    return sass('./sass/style.scss', { sourcemap: true, style: 'compact'})
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
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts','images', 'watch']);