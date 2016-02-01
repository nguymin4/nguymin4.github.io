var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var spawn = require("child_process").spawn;

var env = {
	isWindows: process.platform.indexOf("win") !== -1,
	isProduction: /production/i.test(process.env.NODE_ENV)
};

var input = {
	html: ["index.html"],
	scss: "src/css/**/*.scss",
	js: "src/js/**/*.js"
};

var output = {
	css: "css",
	js: "js"
};


gulp.task("build:dev", ["sass", "webpack:watch"]);

gulp.task("sass", function () {
	var style = env.isProduction ? "compressed" : "expanded";
	return gulp.src(input.scss)
		.pipe(sass({ outputStyle: style }).on('error', sass.logError))
		.pipe(gulp.dest(output.css));
});

gulp.task("webpack:watch", function () {
	var cmd = (env.isWindows) ? "webpack.cmd" : "webpack";
	spawn(cmd, ["--watch"], {
		detached: false,
		stdio: "inherit"
	})
});

gulp.task("browser-sync", ["build:dev"], function () {
	browserSync.init({
		server: {
            baseDir: "./"
        },
		snippetOptions: {
			rule: {
				match: /<\/body>/i,
				fn: (snippet, match) => snippet + match
			}
		}
	});
});

gulp.task("dev", ["browser-sync"], function () {
	// Watch HTML
	gulp.watch(input.html).on("change", browserSync.reload);
	
	// Watch SCSS
	gulp.watch(input.scss, ["sass"]);
	gulp.watch(output.css + "/**/*.css")
		.on("change", browserSync.reload);
	
	// Watch JS
	gulp.watch(output.js + "/**/*.js")
		.on("change", browserSync.reload);
});