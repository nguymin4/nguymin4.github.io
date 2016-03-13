var path = require("path");
var spawn = require("child_process").spawn;
var config = require("./config.js");
var server = {};

var driver = {
	"firefox": "",
	"chrome": `-Dwebdriver.chrome.driver=${config.driverPath.chrome || "chromedriver"}`,
	"phantomjs": `-Dwebdriver.phantomjs.driver=${config.driverPath.phantomjs || "phantomjs"}`
}

module.exports.start = function(browser, callback) {
	var args = ["-jar", config.seleniumPath + config.seleniumFile, "-port", config.seleniumPort];

	if (config.seleniumRole) args.push("-role", config.seleniumRole);
	if (config.seleniumRole === "node") {
		args.push("-hub", config.seleniumHub);
		args.push("-browser", `browserName=${browser},maxInstances=${config.maxIntances || 2}`);
	}
	if (browser) args.push(driver[browser]);
	createServer(args, callback);
}

function createServer(args, callback) {
	var host;
	server = spawn("java", args, {
		detached: true,
		env: process.env,
	});

	server.on('exit', function(code) {
		process.exit(code);
    });

	process.on("SIGINT", function() {
		server.kill("SIGINT");
    }).on("exit", function() {
		server.kill("SIGINT");
	});

	server.stderr.on("data", processData);
	server.stdout.on("data", processData);

	function processData(data) {
		var data = data.toString();
		if (data.search("Address already in use") !== -1) {
			console.error("[ERROR] Port", config.seleniumPort, "in use");
			process.exit(1);
		}

		// In case create hub then get ip address
		if (config.seleniumRole === "hub" && !host) {
			var temp = /http:\/\/([\d\.]+):\d+\/grid\/register\//g.exec(data);
			if (temp) host = temp[1];
		}

		if (data.search("up and running") !== -1
			|| data.search("ready to use") !== -1)
			callback(host);
	}
}