var seleniumDriver = require("./selenium-driver.js");
var jasmine = require("./jasmine.js");
var util = require("./util.js");

var selenium = {};

seleniumDriver.init((webdriver, driver) => {
	selenium.webdriver = webdriver;
	selenium.driver = driver;
	selenium.by = webdriver.By;
		
	// Config and run jasmine
	util.extend(global, selenium)
	jasmine.config(driver);
});