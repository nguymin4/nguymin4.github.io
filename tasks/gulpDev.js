var gulp = require("gulp"),
	sass = require("gulp-sass"),
	spawn = require("child_process").spawn,
	browserSync = require("browser-sync").create();

module.exports = function (env, config) {
	var input = config.input,
		output = config.output;

	gulp.task("webpack:watch", function () {
		var webpack = spawn(env.cmd("webpack"), ["--watch"], {
			detached: false,
			stdio: "inherit"
		});
		process.on("exit", () => webpack.kill());

		gulp.watch(output.js + "/**/*.js")
			.on("change", browserSync.reload);
	});

	gulp.task("sass:dev", function () {
		gulp.watch(input.scss.list, () => {
			return gulp.src(input.scss.target)
				.pipe(sass({ outputStyle: "expanded" }).on('error', sass.logError))
				.pipe(gulp.dest(output.css));
		});
	});

	gulp.task("browser-sync", function (done) {
		browserSync.init({
			server: {
				baseDir: "./"
			},
			files: [output.css + "/**/*.css"]
		}, done);
	});

	gulp.task("dev", gulp.parallel("html", "sass:dev", "webpack:watch", "browser-sync"));
};
