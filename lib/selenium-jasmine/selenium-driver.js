var webdriver = require("selenium-webdriver");
var driver;

// Starting server
var config = require("./util.js").config;
var seleniumServer = require("./selenium-server.js");

module.exports.init = function (done) {
	seleniumServer.start(function () {
		var url = `http://127.0.0.1:${config.seleniumPort || 4444}/wd/hub`;
		driver = new webdriver.Builder()
			.forBrowser("phantomjs")
			.forBrowser("chrome")
			.usingServer(url)
			.build();
		
		console.log("Selenium standalone running at:", url);
		done(webdriver, driver);
	});
}