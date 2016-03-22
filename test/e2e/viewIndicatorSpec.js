var async = require("../helper/async.js");

describe(`[${browserName}] View indicators`, function() {
	var items = [];

	beforeAll(done => {

		async.waterfall([
			() => browser.get("http://localhost:3000"),
			() => browser.sleep(1500),
			() => browser.findElements(by.css(".view-indicator"))
		]).then(_items => {
			items = _items;
			done();
		});
		
	});

	it("should have 5 items", () => {
		expect(items.length).toEqual(5);
	});

	describe("when one item is clicked, the corresponding view", () => {

		it("should be active", done => {
			items[1].click();

			async.parallel([
				browser.findElement(by.css("#about"))
					.getAttribute("class")
					.then(value => expect(value).toContain("active")),

				browser.findElement(by.css("#home"))
					.getAttribute("class")
					.then(value => expect(value).not.toContain(" active")),

				browser.getCurrentUrl()
					.then(value => expect(value).toContain("#about-me"))
			]).then(done);

		});

		it("should display correct content", done => {
			async.parallel([
				browser.findElement(by.css("#about h2")).getText()
					.then(value => expect(value).toEqual("About me")),

				browser.findElements(by.css("#about #contact .fa"))
					.then(_items => expect(_items.length).toEqual(3)),

				browser.findElement(by.css("#about .col-sm-9")).getInnerHtml()
					.then(value => {
						expect(value.length).toBeGreaterThan(200);
						expect(value).toContain("IT");
					})
			]).then(done);
		});

	});
});