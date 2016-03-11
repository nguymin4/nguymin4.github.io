var SpecReporter = require("jasmine-spec-reporter");

module.exports = {
    "spec_dir": "test/e2e",
    "spec_files": [
        "*Spec.js"
    ],
	"reporters": [
		new SpecReporter({
			displayStacktrace: "specs"
		})
	]
}