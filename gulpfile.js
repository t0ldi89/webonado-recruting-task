var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task("sass", function() {
  return gulp.src("./scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass(
      {
        outputStyle: 'compresed',
        sourceComments: 'map',
      }
    ).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream())
});

gulp.task("watch", function(){
  browserSync.init({
    server: {
      baseDir: "./",
      port: 1024,
    }
  });
  gulp.watch("scss/**/*.scss", gulp.series("sass"));
  gulp.watch("*.html").on('change', browserSync.reload);
});