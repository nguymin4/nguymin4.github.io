var async = require("../helper/async.js");

describe(`[${browserName}] In general, when the user visit the page`, function() {

	beforeAll(done => browser.get("http://localhost:3000").then(done));

	it("should hide the loading screen after loaded resources", function(done) {
		async.waterfall([
			() => browser.sleep(200),
			() => browser.findElement(by.css("#overlay")).getCssValue("opacity")
		])
			.then(value => expect(parseFloat(value)).toBeLessThan(1))
			.then(done);
	});

	it("should display correct website title", function(done) {
		browser.getTitle()
			.then(title => expect(title).toEqual("Minh Son Nguyen"))
			.then(done);
	});

	it("should display the the correct view", function(done) {
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

	describe(`[${browserName}] When the user visit http://localhost:3000/#projects/detail/aspnet-bookstore`, function() {

		beforeAll(done => browser.get("http://localhost:3000/#projects/detail/aspnet-bookstore").then(done));

		it("should open project detail view", function(done) {
			async.parallel([
				browser.findElement(by.css("#projects"))
					.getAttribute("class").then(value => {
						expect(value).toContain("active");
					}),

				browser.findElement(by.css(".project-detail"))
					.getAttribute("class").then(value => {
						expect(value).toContain("active");
					})

			]).then(done);
		});

		it("should have correct content", function(done) {

			async.parallel([
				browser.findElement(by.css(".project-detail .content-box"))
					.getInnerHtml().then(value => {
						expect(value).toContain("<h3>Book Store</h3>");
					}),

				browser.findElement(by.css(".project-detail .btn-github"))
					.getAttribute("href").then(value => {
						expect(value).toEqual("https://github.com/nguymin4/aspnet-bookstore");
					})

			]).then(done);
		});
	});
});