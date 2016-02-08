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

gulp.task("buildColorSchemeLess", function() {
    return gulp.src(["./Less/ColorSchemes/*.less"])
        .pipe(less())
        .pipe(gulp.dest("Styles/ColorSchemes"));
});

gulp.task("minifyColorSchemeStyles", function () {
    return gulp.src(["./Styles/ColorSchemes/Black.css",
        "./Styles/ColorSchemes/Blue.css",
        "./Styles/ColorSchemes/Green.css",
        "./Styles/ColorSchemes/Grey.css",
        "./Styles/ColorSchemes/White.css"])
        .pipe(minify())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest("Styles/ColorSchemes"));
});

/*
 * JavaScript tasks.
 */

gulp.task("concatScripts", function() {
    return gulp.src(["./Vendor/DoubletapToGo/doubletaptogo.js",
        "./Scripts/Theme.js"])
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

gulp.task("colorSchemes", function(callback) {
    runSequence("buildColorSchemeLess",
        "minifyColorSchemeStyles");
});