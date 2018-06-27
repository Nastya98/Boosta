const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

gulp.task('default', () =>
    gulp.src('app/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css/'))
);
gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.scss', ['sass']);
});