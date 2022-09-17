"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var uglify = require("gulp-uglify");
var autoPrefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");

// Define tasks after requiring dependencies

function styleTask() {
  return gulp
    .src(["scss/main.scss"])
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .on("error", sass.logError)
    .pipe(
      autoPrefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("css"));
}

function jsTask() {
  return gulp
    .src(["js_src/**/*.*"])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("maps"))
    .pipe(gulp.dest("js"));
}

function jsTaskBuild() {
  return gulp.src(["js_src/**/*.*"]).pipe(uglify()).pipe(gulp.dest("js"));
}

function watch() {
  gulp.watch("sass/**/*.scss", styleTask);
  gulp.watch("js_src/**/*.js", jsTask);
}

// Task for SASS compilation
gulp.task("compile:sass", styleTask);

// Task for JS compilation on DEV
gulp.task("compile:js", jsTask);

// Task for JS compilation on Prod
gulp.task("compile:js:build", jsTaskBuild);

// Default gulp task using gulp commands
gulp.task("default", gulp.parallel("compile:sass", "compile:js:build"));

gulp.task("dev", gulp.parallel("compile:sass", "compile:js"));

gulp.task("watch", watch);

exports.style = styleTask;
exports.jsTask = jsTask;
exports.jsTaskBuild = jsTaskBuild;
exports.watch = watch;
