describe(`[${browserName}] In general, when the user visit homepage`, function() {

	browser.get("http://localhost:3000");

	it("should display correct website title", function(done) {
		browser.getTitle().then(title => {
			expect(title).toEqual("Minh Son Nguyen");
			done();
		});
	});

	it("should display loading screen", function(done) {
		var loading_container = browser.findElement(by.css("#overlay"));
		loading_container.getCssValue("z-index").then(value => {
			expect(value).toEqual("9999");
			done();
		});
	});

	it("then hide the loading screen", function(done) {
		var loading_container = browser.findElement(by.css("#overlay"));
		browser.sleep(1000).then(() => {
			loading_container.getCssValue("z-index").then(value => {
				expect(value).toEqual("-1");
				done();
			});
		});
	});
	
	it("then display the homepage", function(done) {
		var home = browser.findElement(by.css("#home"));
		var ready = 0;
		home.getAttribute("class").then(value => {
			expect(value).toContain("active");
			ready += 1;
			if (ready === 2) done();
		});
		home.getInnerHtml().then(value => {
			expect(value).toContain("<h1>Minh Son Nguyen</h1>");
			ready += 1;
			if (ready === 2) done();
		});
	});
});