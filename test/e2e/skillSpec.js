var async = require("../helper/async.js");

describe(`[${browserName}] When the user visit page via hash #skills`, function() {
	var rows = [];

	beforeAll(done => {
		async.waterfall([
			() => browser.get("http://localhost:3000/#skills"),
			() => browser.findElements(by.css("#skills .row"))
		])
			.then(_rows => rows = _rows)
			.then(done);
	});

	describe("the view", () => {
		it("should display skill section", done => {
			async.parallel([
				browser.findElement(by.css("#skills")).getAttribute("class")
					.then(value => expect(value).toContain(" active")),

				rows[0].getInnerHtml()
					.then(value => expect(value).toMatch(/skills/i)),

				rows[1].getInnerHtml()
					.then(value => expect(value).toMatch(/achievements/i))
			]).then(done);
		});
	});


	describe("and when title 'Skills' is clicked, the content box of that part", () => {
		function getRowHeight() {
			return async.waterfall([
				() => rows[0].findElement(by.css("h2")).click(),
				() => rows[0].getAttribute("style")
			])
				.then(value => /max-height:\s(\d+)px/.exec(value)[1])
				.then(value => parseFloat(value));
		}

		it("should be minimized ", done => {
			getRowHeight()
				.then(value => expect(value).toBeLessThan(100))
				.then(done);
		});

		it("should be maximized when clicked again", done => {
			if (/phantomjs/i.test(browserName)) done();
			else
				getRowHeight()
					.then(value => expect(value).toBeGreaterThan(100))
					.then(done);
		});
	});
});