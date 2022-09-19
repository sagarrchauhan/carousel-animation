"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var uglify = require("gulp-uglify");
var autoPrefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var svgSprite = require("gulp-svg-sprite");

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

function watch() {
  gulp.watch("scss/**/*.scss", styleTask);
  gulp.watch("js_src/**/*.js", jsTask);
  gulp.watch("images/svg_icons/*.svg", svgAgg);
}

function svgAgg() {
  return gulp
    .src("images/svg_icons/*.svg")
    .pipe(
      svgSprite({
        mode: {
          css: {
            mode: "symbol",
            dest: "images",
            sprite: "svg_sprite.svg",
          },
        },
        shape: {
          id: {
            generator: "icon-%s",
          },
        },
      })
    )
    .pipe(gulp.dest("."));
}

// Task for SASS compilation
gulp.task("compile:sass", styleTask);

// Task for JS compilation on DEV
gulp.task("compile:js", jsTask);

// Task for SVG compilation
gulp.task("svg", svgAgg);

// Default gulp task using gulp commands
gulp.task("default", gulp.parallel("compile:sass", "compile:js", "svg"));

gulp.task("watch", watch);

exports.style = styleTask;
exports.jsTask = jsTask;
exports.watch = watch;
exports.svg = svgAgg;
