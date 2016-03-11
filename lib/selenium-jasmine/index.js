var seleniumDriver = require("./selenium-driver.js");
var jasmine = require("./jasmine.js");
var util = require("./util.js");

var selenium = {};

// If env variable is set then run test immediately
if (process.env["SELENIUM_CAPABILITY"]) {
	var capability = JSON.parse(process.env["SELENIUM_CAPABILITY"]);
	init(capability);
}
// else waiting message from parent process and run
// the message is capability object 
else process.on("message", init);

function init(capability) {
	seleniumDriver.init(capability, (webdriver, driver) => {
		selenium.webdriver = webdriver;
		selenium.driver = driver;
		selenium.by = webdriver.By;
		
		// Config and run jasmine
		util.extend(global, selenium);
		jasmine.configure(driver);
	});
}
