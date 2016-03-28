var fs = require("fs");
var path = require("path");
var async = require("../helper/async.js");

var myBrowser = forkBrowserInstance();
var builder = new webdriver.ActionSequence(myBrowser);

describe(`[${browserName}] Screenshot of Interests section`, () => {

	afterAll(done => myBrowser.quit().then(done));

	it("should be taken", done => {
		async.waterfall([
			() => myBrowser.get("http://localhost:3000/#interests"),
			() => myBrowser.sleep(500),
			() => myBrowser.findElement(by.css(".interest-card")),
			el => builder.mouseMove(el, (50, 50)).perform(),
			() => myBrowser.takeScreenshot()
		]).then(data => saveScreenshot("interests", data, done));
	});
});

function saveScreenshot(filename, data, done) {
	filename = path.join(__dirname, "screenshot", `${filename}-${browserName}.png`);
	data = data.replace(/^data:image\/png;base64,/, "");
	fs.createWriteStream(filename)
		.write(new Buffer(data, "base64"));
	done();
}