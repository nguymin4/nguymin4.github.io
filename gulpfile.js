var env = {
	isWindows: process.platform.indexOf("win") !== -1,
	isProduction: /production/i.test(process.env.NODE_ENV),
	cmd: (command) => (env.isWindows) ?
		".\\node_modules\\.bin\\" + command + ".cmd" :
		"./node_modules/.bin/" + command
};

var input = {
	html: {
		target: "src/index.html",
		views : "views/**/*.html"
	},
	scss: {
		target: "src/css/site.scss",
		list:"src/css/**/*.scss"
	},
	js: "src/js/**/*.js"
};

var output = {
	html: ".",
	css: "css",
	js: "js"
};

// Load development tasks
if (!env.isProduction) require("./tasks/gulpDev.js")(env, input, output);

// Load production tasks
require("./tasks/gulpProd.js")(env, input, output);