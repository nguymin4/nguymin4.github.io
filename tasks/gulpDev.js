var gulp = require("gulp"),
	sass = require("gulp-sass"),
	spawn = require("child_process").spawn,
	browserSync = require("browser-sync").create(),
	reload = browserSync.reload;

module.exports = function (env, input, output) {

	gulp.task("build:dev", ["html", "sass:dev", "webpack:watch"]);

	gulp.task("webpack:watch", function () {
		var cmd = (env.isWindows) ? "webpack.cmd" : "webpack";
		spawn(cmd, ["--watch"], {
			detached: false,
			stdio: "inherit"
		})
	});
	
	gulp.task("sass:dev", function () {
		return gulp.src(input.scss)
			.pipe(sass({ outputStyle: "expanded" }).on('error', sass.logError))
			.pipe(gulp.dest(output.css))
			// .pipe(browserSync.stream()); 
	});

	gulp.task("browser-sync", ["build:dev"], function () {
		browserSync.init({
			server: {
				baseDir: "./"
			},
			files: [output.css + "/**/*.css"],
			snippetOptions: {
				rule: {
					match: /<\/body>/i,
					fn: (snippet, match) => snippet + match
				}
			},
			 plugins: [{
				module: "bs-html-injector",
				options: {
					files: ["index.html"]
				}
			}]
		});
	});

	gulp.task("dev", ["browser-sync"], function () {
		// Watch HTML
		gulp.watch(input.html, ["html"]);
		// gulp.watch(output.html + "/index.html")
		// 	.on("change", reload);
	
		// Watch SCSS
		gulp.watch(input.scss, ["sass:dev"]);
	
		// Watch JS
		gulp.watch(output.js + "/**/*.js")
			.on("change", reload);
	});
}
