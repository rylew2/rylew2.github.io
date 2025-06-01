var gulp = require("gulp"),
  browserify = require("gulp-browserify"),
  connect = require("gulp-connect"),
  concat = require("gulp-concat");

var env, jsSources, sassSources, htmlSources, jsonSources, outputDir, sassStyle;

/* technically not needed */
env = process.env.NODE_ENV || "development";
if (env === "development") {
  outputDir = "";
  //sassStyle = 'expanded';
} else {
  outputDir = "";
  //sassStyle = 'compressed';
}

jsSources = ["js/**/**.js"]; //** for all subfolders

gulp.task("js", function () {
  gulp
    .src(jsSources)
    .pipe(concat("combinedTest.js"))
    .pipe(gulp.dest("js/"))
    .pipe(connect.reload());
});

gulp.task("connect", function () {
  connect.server({
    root: outputDir,
    livereload: true,
  });
});

gulp.task("watch", function () {
  gulp.watch(jsSources, ["js"]);
});

//upgrade for gulp 4.0
gulp.task("default", gulp.series("connect", "watch"));
