var path = require("path");

module.exports = {
	mode: 'production',
	context: __dirname,
	entry: {
		site: "./src/js/site.js"
	},
	output: {
		path: path.join(__dirname, "./assets/js"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /(\.js)|(\.jsx)$/,
				include: [
					path.resolve(__dirname, "src", "js"),
					path.resolve(__dirname, "test", "unit")
				],
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"],
					}
				}
			},
			{
				test: /\.html$/,
				use : {
					loader: 'html-loader',
					options: {
						attrs: false
					}
				}
			}
		]
	}
};