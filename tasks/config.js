module.exports = {
	input: {
		html: {
			target: "src/index.html",
			views: "assets/views/**/*.html"
		},
		scss: {
			target: "src/css/site.scss",
			list: "src/css/**/*.scss"
		},
		js: "src/js/**/*.js"
	},

	output: {
		html: ".",
		css: "assets/css",
		js: "assets/js"
	},

	uglifyOptions: {
		mangle: false,
		output: {
			semicolons: true,
		},
		compress: {
			warnings: false
		}
	}
}