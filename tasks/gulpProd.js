var gulp = require("gulp"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	replace = require("gulp-replace"),
	util = require("gulp-util"),
	exec = require("child_process").exec;

module.exports = function(env, config) {
	var input = config.input,
		output = config.output,
		metaData = require(input.html.meta);

	gulp.task("build", ["build:env", "html", "sass:build", "webpack:build"]);

	gulp.task("build:env", function() {
		env.isProduction = true;
	});

	gulp.task("html", function() {
		var src = gulp.src(input.html.target);

		// Add meta data
		for (var keyword in metaData) {
			var meta = metaData[keyword];
			if (typeof meta !== "string")
				meta = env.isProduction ? meta["build"] : meta["dev"];
			meta = meta.replace(/[\n\t]/g, "");
			src = src.pipe(replace.call(this, "${" + keyword + "}", meta));
		}

		src.pipe(replace("${no-animation}", util.env["test"] ? "no-animation" : ""));

		return src.pipe(gulp.dest(output.html));
	});

	gulp.task("html:build", ["build:env", "html"]);

	gulp.task("sass:build", function() {
		return gulp.src(input.scss.target)
			.pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
			.pipe(rename((path) => path.basename += ".min"))
			.pipe(gulp.dest(output.css));
	});

	gulp.task("webpack:build", ["uglify:js"]);

	gulp.task("webpack", function(cb) {
		exec(env.cmd("webpack"), function(err) {
			if (!err) cb(null);
			else cb(true);
		});
	});

	gulp.task("uglify:js", ["webpack"], function() {
		gulp.src([output.js + "/site.js"])
			.pipe(uglify(config.uglifyOptions))
			.pipe(rename((path) => path.basename += ".min"))
			.pipe(gulp.dest(output.js));
	});
};
