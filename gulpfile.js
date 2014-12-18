var gulp = require('gulp'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    rsync = require('gulp-rsync');

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

gulp.task('deploy', function() {
    gulp.src('./')
        .pipe(rsync({
            root: './',
            destination: '~/apps/holidaycard/public',
            username: 'serverpilot',
            hostname: '104.131.181.203',
            recursive: true,
            exclude: ['.git','*.scss','*.md','bower.json','package.json','gulpfile.js','node_modules']
        }));
});

gulp.task('default', function() {
    gulp.run(['compass']);
});