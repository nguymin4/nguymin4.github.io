var path = require("path");
var spawn = require("child_process").spawn;
var http = require("http");
var util = require("./util.js");

var server = {};

var config = util.config;
var seleniumFile = `/selenium-server-standalone-${config.seleniumVersion}.jar`;
var seleniumPath = config.seleniumPath + seleniumFile;

var driver = {
	"firefox": "",
	"chrome": `-Dwebdriver.chrome.driver=${util.driverPath.chrome}`,
	"phantomjs": `-Dwebdriver.phantomjs.driver=phantomjs`
}

module.exports.start = function (browser, callback) {
	var args = ["-jar", seleniumPath];

	if (config.seleniumPort)
		args.push("-port " + config.seleniumPort);
	
	args.push(driver[browser] || "chrome")
	
	server = spawn("java", args, {
		detached: true,
		env: process.env,
	});
	
	server.on('exit', function (code) {
		console.log('Selenium Standalone has exited with code ' + code);
		process.exit(code);
    });
	
	process.on("SIGINT", function () {
		server.kill("SIGINT");
    }).on("exit", function () {
		server.kill("SIGINT");
	});

	function startTest(data) {
		if (data.toString().indexOf("up and running") !== -1)
			callback();
	}

	server.stderr.on("data", startTest);
	server.stdout.on("data", startTest);
}
