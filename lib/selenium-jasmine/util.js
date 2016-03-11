var path = require("path");

var env = {
	isWindows: process.platform.indexOf("win") !== -1,
	exeFile: execFile => env.isWindows ? execFile + ".exe" : execFile
};

var config = (function () {
	var config = require("./config.json");

	if (process.argv.length > 2) config.jasmineConf = process.argv[2];

	for (var prop in config) {
		if (prop.indexOf("Path") !== -1) {
			var p = __dirname + "/" + config[prop];
			config[prop] = path.normalize(p);
		}
	}
	
	return config;
})();

module.exports = {
	driverPath: {
		"chrome": path.join(config.driverPath, env.exeFile("chromedriver"))
	},
	config: config,
	env: env,
	extend: (destination, source) => {
		for (var property in source) destination[property] = source[property];
		return destination;
	}
}