var path = require("path");

var env = {
	isWindows: process.platform.indexOf("win") !== -1,
};

var util = {
	env: env,
	exeFile: execFile => env.isWindows ? execFile + ".exe" : execFile,
	extend: (destination, source) => {
		for (var property in source) destination[property] = source[property];
		return destination;
	}
};

module.exports = util;