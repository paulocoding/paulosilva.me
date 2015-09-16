var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    
    browserSync.init({
        server: "./"
    });
    
    gulp.watch('sass/**/*.scss', ['sass']);
    
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./css/*.css").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});