var webdriver = require("selenium-webdriver");
var driver;

// Starting server
var config = require("./util.js").config;
var seleniumServer = require("./selenium-server.js");

module.exports.init = function (capability, done) {
	seleniumServer.start(capability.browserName, function () {
		var url = `http://127.0.0.1:${config.seleniumPort || 4444}/wd/hub`;
		driver = new webdriver.Builder()
			.withCapabilities(capability)
			.usingServer(url)
			.build();

		console.log("Selenium standalone server running at:", url);
		done(webdriver, driver);
	});
}