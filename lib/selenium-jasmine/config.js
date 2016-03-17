var path = require("path");
var fs = require("fs");
var util = require("./util.js");

// Read from default config.json
var defaultBinFolder = path.normalize(__dirname + "/bin");
var config = {
	"seleniumPath": defaultBinFolder,
	"seleniumVersion": "2.52.0"
};

// Read config file passed
if (process.argv.length > 2) config.jasmineConf = process.argv[2];
var configFilePath = path.join(process.cwd(), config.jasmineConf);
util.extend(config, require(configFilePath));


// Resolve path
var driverPath = {
	"chrome": path.join(defaultBinFolder, util.exeFile("chromedriver")),
	"phantomjs": path.join(defaultBinFolder, util.exeFile("phantomjs"))
};

for (var driverName in driverPath) {
	var driver = driverPath[driverName];
	if (!fs.existsSync(driver))
		driverPath[driverName] = path.basename(driver);
}

util.extend(config, {
	driverPath: driverPath,
	seleniumFile: `/selenium-server-standalone-${config.seleniumVersion}.jar`,
	seleniumPort: process.env["SELENIUM_PORT"] || config.seleniumPort || 4444
});

module.exports = config;