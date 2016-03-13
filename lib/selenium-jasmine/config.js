var path = require("path");
var util = require("./util.js");

// Read from default config.json
var defaultBinFolder = path.normalize(__dirname + "/bin");
var config = {
	"seleniumPath": defaultBinFolder,
	"seleniumVersion": "2.51.0",
	"driverPath": defaultBinFolder
};

// Read config file passed
if (process.argv.length > 2) config.jasmineConf = process.argv[2];
var configFilePath = path.join(process.cwd(), config.jasmineConf);
util.extend(config, require(configFilePath))

// Resolve
util.extend(config, {
	driverPath: {
		"chrome": path.join(config.driverPath, util.exeFile("chromedriver"))
	},
	seleniumFile: `/selenium-server-standalone-${config.seleniumVersion}.jar`,
	seleniumPort: process.env["SELENIUM_PORT"] || config.seleniumPort || 4444
})

module.exports = config;