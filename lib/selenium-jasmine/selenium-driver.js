var webdriver = require("selenium-webdriver");
var driverBuilder;

// Starting server
var config = require("./config.js");
var seleniumServer = require("./selenium-server.js");

module.exports.init = function (capability, done) {
	seleniumServer.start(capability.browserName, function () {
		var host = config.seleniumHost || "localhost";
		var port = config.seleniumPort || 4444;
		var url = `http://${host}:${port}/wd/hub`;
		driverBuilder = () => new webdriver.Builder()
			.withCapabilities(capability)
			.usingServer(url);

		console.log("[INFO] Selenium standalone server running at:", url);
		console.log("[INFO] Using browser", capability.browserName.toUpperCase(), "to test");
		done(webdriver, driverBuilder);
	});
}