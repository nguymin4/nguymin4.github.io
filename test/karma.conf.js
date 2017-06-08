var path = require("path");
var webpackModule = require("../webpack.config.js").module;

module.exports = function (config) {
	config.set({
		frameworks: ["jasmine"],
		basePath: "../",
		files: [
			"assets/js/vendor.min.js",
			"node_modules/jquery/dist/jquery.min.js",
			"node_modules/perfect-scrollbar/js/perfect-scrollbar.jquery.js",
			"node_modules/jasmine-jquery/lib/jasmine-jquery.js",
			"test/unit/**/*Spec.js"
		],
		preprocessors: {
			"test/unit/**/*Spec.js": ["webpack"]
		},

		// Webpack
		webpack: {
			module: webpackModule,
			resolve: {
				root: [path.resolve("src/js")]
			}
		},
		webpackServer: {
			noInfo: true
		},

		// Reporter
		reporters: ["mocha"],
		mochaReporter: {
			output: "full",
			divider: "-"
		},

		// Custom PhantomJS
		browsers: ["MyPhantomJS"],
		customLaunchers: {
			"MyPhantomJS": {
				base: "PhantomJS",
				options: {
					windowName: "my-window",
					settings: {}
				},
				flags: ["--load-images=false"]
			}
		},

		plugins: [
			"karma-jasmine",
			"karma-webpack",
			"karma-mocha-reporter",
			"karma-phantomjs-launcher"
		],
		autowatch: true,
		singleRun: false
	});
};
