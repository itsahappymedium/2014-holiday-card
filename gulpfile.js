var gulp = require('gulp'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('compass', function() {
    gulp.src('./css/*.scss')
        .pipe(compass({
            css: 'css',
            sass: 'css'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();

    // Watch scss
    gulp.watch('css/*.scss', ['compass']);

    // Watch JS
    gulp.watch('js/*.js', function() {
        livereload();
    });

    // Watch HTML
    gulp.watch('index.html', function() {
        livereload();
    })
});

gulp.task('default', function() {
    gulp.run('compass');
});