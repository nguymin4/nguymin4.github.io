var fs = require("fs");
var path = require("path");
var Jasmine = require('jasmine');
var configFilePath = require("./util.js").config.jasmineConf;

var jasmine = new Jasmine();
function config(driver) {
	jasmine.onComplete(function (passed) {
		driver.quit();
		setTimeout(() => process.exit(0), 500);
	});
	
	// Load configuration file if exists based on config.json
	try {
		configFilePath = path.normalize(__dirname + "/../../" + configFilePath);
		jasmine.loadConfigFile(configFilePath);
		var config = require(configFilePath);
		config.reporters.forEach(jasmine.addReporter.bind(jasmine));
		jasmine.execute();
	}
	catch (e) {
		console.log(e);
		process.exit(0);
	}
}

module.exports = {
	execute: jasmine.execute.bind(jasmine),
	config: config,
	env: jasmine.env
}