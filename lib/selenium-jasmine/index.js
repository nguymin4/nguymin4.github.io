var config = require("./config.js");
var util = require("./util.js");
var seleniumDriver = require("./selenium-driver.js");
var jasmine = require("./jasmine.js");

var selenium = {};

// If env variable is set then run test immediately
if (process.env["SELENIUM_CAPABILITY"]) {
	var capability = JSON.parse(process.env["SELENIUM_CAPABILITY"]);
	init(capability);
}
// else waiting message from parent process and run
// the message is capability object 
else process.on("message", data => {
	if (data.capability) {
		util.extend(config, data.config);
		global.browserName = data.capability.browserName.toUpperCase();
		init(data.capability);
	}
	else {
		var hub = require("./selenium-server.js");
		util.extend(config, data);
		hub.start(null, (host) => {
			console.log("Selenium hub up and running", host);
			process.send({
				msg: "Created",
				seleniumHub: host
			});
		});
	}
});

function init(capability) {
	seleniumDriver.init(capability, (webdriver, driverBuilder) => {
		selenium.webdriver = webdriver;
		selenium.browser = driverBuilder().build();
		selenium.forkBrowserInstance = () => driverBuilder().build();
		selenium.by = webdriver.By;
		
		// Config and run jasmine
		util.extend(global, selenium);
		jasmine.configure(selenium.browser);
	});
}
