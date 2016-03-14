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
			"browserName": "chrome"
		},
		{
			"browserName": "phantomjs",
			"phantomjs.cli.args": ["--load-images=false"]
		}
	],
	// Port of selenium grid hub 
	// or port of selenium standalone server in running sequencial tests 
	// - Optional
	hubPort: 4444,
	// Maximum number of instances of each browser that can be spawned - Optional
	maxIntances: 3
}