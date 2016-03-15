var Jasmine = require("jasmine");
var config = require("./config.js");

var jasmine = new Jasmine();

function configure(driver) {
	jasmine.onComplete(function (passed) {
		console.log("");
		driver.quit();
		setTimeout(() => process.exit(0), 1000);
	});
	
	// Load configuration file if exists based on config.js
	try {
		jasmine.loadConfigFile(config.jasmineConf);
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