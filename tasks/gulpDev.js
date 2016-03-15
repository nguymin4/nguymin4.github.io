var gulp = require("gulp"),
	sass = require("gulp-sass"),
	spawn = require("child_process").spawn,
	browserSync = require("browser-sync").create(),
	reload = browserSync.reload;

module.exports = function (env, config) {
	var input = config.input,
		output = config.output;
		
	gulp.task("build:dev", ["html", "sass:dev", "webpack:watch"]);

	gulp.task("webpack:watch", function () {
		var webpack = spawn(env.cmd("webpack"), ["--watch"], {
			detached: false,
			stdio: "inherit"
		});

		process.on("exit", () => webpack.kill());
	});

	gulp.task("sass:dev", function () {
		return gulp.src(input.scss.target)
			.pipe(sass({ outputStyle: "expanded" }).on('error', sass.logError))
			.pipe(gulp.dest(output.css));
	});

	gulp.task("browser-sync", ["build:dev"], function (done) {
		browserSync.init({
			server: {
				baseDir: "./"
			},
			files: [output.css + "/**/*.css"],
			plugins: [{
				module: "bs-html-injector",
				options: {
					files: ["index.html", input.html.views]
				}
			}]
		}, done);
	});

	gulp.task("dev", ["browser-sync"], function () {
		// Watch HTML
		gulp.watch(input.html.target, ["html"]);
	
		// Watch SCSS
		gulp.watch(input.scss.list, ["sass:dev"]);
	
		// Watch JS
		gulp.watch(output.js + "/**/*.js")
			.on("change", reload);
	});
};
