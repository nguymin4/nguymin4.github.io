var SpecReporter = require("jasmine-spec-reporter");

module.exports = {
	scriptTimeout: 10000,
    spec_dir: "test/e2e", // Relative path from root folder
    spec_files: [
        "*Spec.js"
    ],
	reporters: [
		new SpecReporter({
			displayStacktrace: "specs"
		})
	],
	// Config the same as in selenium-webdriver capablities
	multiCapabilities: [
		{
			"browserName": "firefox"
		}, 
		{
			"browserName": "chrome"
		},
		{
			"browserName": "phantomjs"
		}
	]
}