var gulp = require("gulp"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	replace = require("gulp-replace"),
	fs = require("fs"),
	exec = require("child_process").exec;

module.exports = function (env, input, output) {
	
	gulp.task("build", ["build:prepare", "html", "sass:build", "webpack:build"]);
	
	gulp.task("build:prepare", function() {
		env.isProduction = true;
		fs.unlink(output.css + "/site.css", (err) => null);
	});
	
	gulp.task("html", function() {
		var src = gulp.src(input.html)
		
		if (env.isProduction)
			src = src.pipe(replace("js/site.js", "js/site.min.js"))
			.pipe(replace("css/site.css", "css/site.min.css"));
			
		return src.pipe(gulp.dest(output.html));
	});

	gulp.task("sass:build", function () {
		return gulp.src(input.scss)
			.pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
			.pipe(rename((path) => path.basename += ".min"))
			.pipe(gulp.dest(output.css));
	});

	gulp.task("webpack:build", ["uglify:js"]);
	
	gulp.task("webpack", function (cb) {
		var cmd = (env.isWindows) ?
			".\\node_modules\\.bin\\webpack.cmd" :
			"./node_modules/.bin/webpack";
		exec(cmd, function (err) {
			if (!err) cb(null)
			else cb(true);
		});
	})

	gulp.task("uglify:js", ["webpack"], function () {
		var options = {
			mangle: false,
			output: {
				semicolons: true,
			},
			compress: {
				warnings: false
			}
		};

		gulp.src([output.js + "/**/*.js",
			"!" + output.js + "/**/*.min.js"])
			.pipe(uglify(options))
			.pipe(rename((path) => path.basename += ".min"))
			.pipe(gulp.dest(output.js));
	});
}
