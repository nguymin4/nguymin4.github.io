var webpack = require("webpack");
var resolveModule = mod => "../../node_modules/" + mod;
var isProduction = process.argv.indexOf("--build") !== -1;
var plugins = [];

if (isProduction)
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		mangle: false,
		output: {
			semicolons: true
		},
		compress: {
			warnings: true
		}
	}));

module.exports = {
	context: __dirname,
	entry: {
		vendor: "./src/js/vendor.js"
	},
	output: {
		path: "./assets/js",
		filename: isProduction ? "[name].min.js" : "[name].js"
	},
	resolve: {
        alias: {
            es6shim: resolveModule("es6-shim/es6-shim.js"),
			jquery: resolveModule("jquery/dist/jquery.js"),
            marked: resolveModule("marked/lib/marked.js"),
			mobile_detect: resolveModule("mobile-detect/mobile-detect.js"),
			perfect_scrollbar: resolveModule("perfect-scrollbar/dist/js/perfect-scrollbar.jquery.min.js")
        }
    },
	externals: {
		"jquery": "$"
    },
	plugins: plugins
};