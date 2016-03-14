var gulp = require("gulp"),
	util = require("gulp-util"),
	path = require("path"),
	fork = require("child_process").fork;

var absPath = relPath => path.join(process.cwd(), relPath);

var configFile, multiCapabilities, port;

gulp.task("e2e", function(done) {
	configFile = util.env["config"];
	var config = require(absPath(configFile))
	multiCapabilities = config.multiCapabilities;
	port = util.env["port"] || config.hubPort  || 4444;
	util.env["parallel"] ? executeParallel(done) : executeSequence(done);
});

function executeParallel(done) {
	// Create hub
	var hub = forkTestRunner({
		seleniumPort: port,
		seleniumRole: "hub"
	}).on("message", runParallelTest);

	function runParallelTest(data) {
		var count = multiCapabilities.length;
		multiCapabilities.forEach((capability, i) => {
			forkTestRunner({
				capability: capability,
				config: {
					seleniumHost: data.seleniumHub,
					seleniumPort: port + i + 1,
					seleniumRole: "node",
					seleniumHub: `http://${data.seleniumHub}:${port}/grid/register/`
				}
			}).on("close", () => {
				count -= 1;
				if (count === 0) {
					hub.kill("SIGINT");
					return done();
				}
			});
		});
	}
}

function executeSequence(done) {
	var capability = multiCapabilities.pop();
	if (!capability) return done();
	forkTestRunner({
		config: {
			seleniumPort: port
		},
		capability: capability
	}).on("close", executeSequence.bind(this, done));
}

function forkTestRunner(msg) {
	var test = fork(absPath("lib/selenium-jasmine"), [configFile]);

	process.on("SIGINT", () => test.kill("SIGINT"))
		.on("exit", () => test.kill("SIGINT"));
	
	test.send(msg);
	return test;
}