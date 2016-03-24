var async = require("../helper/async.js");

describe(`[${browserName}] In general, when the user visit the page`, function() {

	beforeAll(done => browser.get("http://localhost:3000").then(done));

	it("should display correct website title", function(done) {
		browser.getTitle()
			.then(title => expect(title).toEqual("Minh Son Nguyen"))
			.then(done);
	});

	it("should display loading screen", function(done) {
		browser.findElement(by.css("#overlay"))
			.getCssValue("z-index")
			.then(value => expect(value).toEqual("9999"))
			.then(done);
	});

	it("then hide the loading screen", function(done) {
		async.waterfall([
			() => browser.sleep(1000),
			() => browser.findElement(by.css("#overlay")),
			el => el.getCssValue("opacity")
		])
			.then(value => expect(parseFloat(value)).toBeLessThan(1))
			.then(done);
	});

	it("then display the the correct view", function(done) {
		browser.findElement(by.css("#home")).then(home => {
			async.parallel([
				home.getAttribute("class").then(value => {
					expect(value).toContain("active");
				}),

				home.getInnerHtml().then(value => {
					expect(value).toContain("<h1>Minh Son Nguyen</h1>");
				})
			]).then(done);
		});
	});
});