var env = {
	isWindows: process.platform.indexOf("win") !== -1,
	isProduction: /production/i.test(process.env.NODE_ENV),
	cmd: (command) => (this.isWindows) ?
		".\\node_modules\\.bin\\" + command + ".cmd" :
		"./node_modules/.bin/" + command
};

var input = {
	html: {
		target: "src/index.html",
		views : "assets/views/**/*.html"
	},
	scss: {
		target: "src/css/site.scss",
		list:"src/css/**/*.scss"
	},
	js: "src/js/**/*.js"
};

var output = {
	html: ".",
	css: "dist/css",
	js: "dist/js"
};

// Load development tasks
if (!env.isProduction) require("./tasks/gulpDev.js")(env, input, output);

// Load production tasks
require("./tasks/gulpProd.js")(env, input, output);