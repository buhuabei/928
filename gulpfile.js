const gulp = require('gulp');
const connect = require('gulp-connect');
gulp.task('server', function () {
    connect.server({
        root: './',
        port: 3000,
        livereload: true
    });
    gulp.watch(['./index.html', './css/style.css'], ['html']);
});
gulp.task('html', function () {
    gulp.src('./index.html')
        .pipe(connect.reload());
});
/* gulp.task('css', function () {
    gulp.src('./css/style.css')
        .pipe(connect.reload());
}); */
