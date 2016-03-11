var fs = require("fs");
var path = require("path");
var Jasmine = require("jasmine");
var configFilePath = require("./util.js").config.jasmineConf;

var jasmine = new Jasmine();

function configure(driver) {
	jasmine.onComplete(function (passed) {
		driver.quit();
		setTimeout(() => process.exit(0), 1000);
	});
	
	// Load configuration file if exists based on util.js
	try {
		configFilePath = path.normalize(__dirname + "/../../" + configFilePath);
		jasmine.loadConfigFile(configFilePath);
		var config = require(configFilePath);
		jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = config.scriptTimeout;
		config.reporters.forEach(jasmine.addReporter.bind(jasmine));
		jasmine.execute();
	}
	catch (e) {
		console.log(e);
		process.exit(1);
	}
}

module.exports.configure = configure;