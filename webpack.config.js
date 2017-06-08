var path = require("path");

module.exports = {
	context: __dirname,
	entry: {
		site: "./src/js/site.js"
	},
	output: {
		path: "./assets/js",
		filename: "[name].js"
	},
	cache: true,
	module: {
		loaders: [
			{
				test: /(\.js)|(\.jsx)$/,
				include: [
					path.resolve(__dirname, "src", "js"),
					path.resolve(__dirname, "test", "unit")
				],
				loader: "babel-loader",
				query: {
					presets: ["es2015"],
					cacheDirectory: true
				}
			},
			{
				test: /\.html$/,
				loader: "html?attrs=false"
			}
		]
	}
};