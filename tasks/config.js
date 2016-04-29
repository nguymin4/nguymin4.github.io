module.exports = {
	input: {
		html: {
			target: "src/html/index.html",
			views: "assets/views/**/*.html",
			meta: "../src/html/meta.js"
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
			semicolons: true
		},
		compress: {
			warnings: true
		}
	}
};