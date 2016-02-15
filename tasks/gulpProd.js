var gulp = require("gulp"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	replace = require("gulp-replace"),
	exec = require("child_process").exec,
	config = require("./config.json");

module.exports = function (env, input, output) {

	gulp.task("build", ["build:env", "html", "sass:build", "webpack:build"]);

	gulp.task("build:env", function () {
		env.isProduction = true;
	});

	gulp.task("html", function () {
		var src = gulp.src(input.html.target)

		if (env.isProduction)
			src = src.pipe(replace("js/site.js", "js/site.min.js"))
				.pipe(replace("css/site.css", "css/site.min.css"))
				.pipe(replace("${content-security-policy}",
					config["content-security-policy"].build));
		else
			src = src.pipe(replace("${content-security-policy}",
				config["content-security-policy"].dev));

		return src.pipe(gulp.dest(output.html));
	});

	gulp.task("html:build", ["build:env", "html"]);

	gulp.task("sass:build", function () {
		return gulp.src(input.scss.target)
			.pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
			.pipe(rename((path) => path.basename += ".min"))
			.pipe(gulp.dest(output.css));
	});

	gulp.task("webpack:build", ["uglify:js"]);

	gulp.task("webpack", function (cb) {
		exec(env.cmd("webpack"), function (err) {
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
