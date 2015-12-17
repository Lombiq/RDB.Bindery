var gulp = require("gulp"),
    less = require("gulp-less"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    minify = require("gulp-minify-css"),
    runSequence = require("run-sequence");
	
/*
 * LESS/CSS tasks.
 */

gulp.task("buildLess", function() {
    return gulp.src("./Less/Site.less")
        .pipe(less())
        .pipe(gulp.dest("Styles"));
});

gulp.task("minifyStyles", function() {
    return gulp.src("./Styles/Site.css")
        .pipe(minify())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest("Styles"));
});

gulp.task("buildColourSchemeLess", function() {
    return gulp.src(["./Less/ColourSchemes/*.less"])
        .pipe(less())
        .pipe(gulp.dest("Styles/ColourSchemes"));
});

gulp.task("minifyColourSchemeStyles", function () {
    return gulp.src(["./Styles/ColourSchemes/Black.css",
        "./Styles/ColourSchemes/Blue.css",
        "./Styles/ColourSchemes/Green.css",
        "./Styles/ColourSchemes/Grey.css",
        "./Styles/ColourSchemes/White.css"])
        .pipe(minify())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest("Styles/ColourSchemes"));
});

/*
 * JavaScript tasks.
 */

gulp.task("concatScripts", function() {
    return gulp.src(["./Vendor/Bootstrap/js/alert.js",
        "./Vendor/Bootstrap/js/dropdown.js",
        "./Vendor/Bootstrap/js/collapse.js"])
        .pipe(concat("Site.js"))
        .pipe(gulp.dest("Scripts"));
});

gulp.task("minifyScripts", function() {
    return gulp.src("./Scripts/Site.js")
        .pipe(uglify())
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(gulp.dest("Scripts"));
});
	
/*
 * General tasks.
 */

gulp.task("default", function(callback) {
    runSequence("buildLess",
        "minifyStyles",
        "concatScripts",
        "minifyScripts");
});

gulp.task("colourSchemes", function(callback) {
    runSequence("buildColourSchemeLess",
        "minifyColourSchemeStyles");
});