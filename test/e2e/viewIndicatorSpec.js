var async = require("../helper/async.js");

describe(`[${browserName}] View indicators`, function() {
	var items = [];

	beforeAll(done => {
		async.waterfall([
			() => browser.get("http://localhost:3000"),
			() => browser.sleep(1500),
			() => browser.findElements(by.css(".view-indicator"))
		])
			.then(_items => items = _items)
			.then(done);
	});

	it("should have one active item", done => {
		items[0].getAttribute("class")
			.then(value => expect(value).toContain("active"))
			.then(done);
	});

	describe("when an item is clicked, ", () => {
		beforeAll(done => items[1].click().then(done));

		describe("that item", () => {
			it("should be the only active item", done => {
				var deffereds = items.map((item, i) =>
					item.getAttribute("class").then(value => {
						value = value.split(" ");
						if (i === 1) expect(value).toContain("active");
						else expect(value).not.toContain("active");
					}));
				async.parallel(deffereds).then(done);
			});

		});

		describe("the corresponding view", () => {

			it("should be active", done => {
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
});