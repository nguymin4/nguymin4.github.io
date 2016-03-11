var gulp = require("gulp"),
	util = require("gulp-util"),
	path = require("path"),
	fork = require("child_process").fork;

var absPath = relPath => path.join(process.cwd(), relPath); 

gulp.task("e2e", function (done) {
	var configFile = util.env["config"];
	var multiCapabilities = require(absPath(configFile)).multiCapabilities;
	
	forkE2E();
	function forkE2E() {
		var capability = multiCapabilities.pop();
		
		if (!capability) {
			done();
			return;
		}
		console.log("Running test with browser:", capability.browserName);
		var test = fork(absPath("lib/selenium-jasmine"), [configFile]);
		test.send(capability);
		test.on("close", forkE2E);
	}
})