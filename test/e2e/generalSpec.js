describe(`[${browserName}] In general, when the user visit the page`, function() {

	browser.get("http://localhost:3000");

	it("should display correct website title", function(done) {
		browser.getTitle().then(title => {
			expect(title).toEqual("Minh Son Nguyen");
			done();
		});
	});

	it("should display loading screen", function(done) {
		browser.findElement(by.css("#overlay"))
			.getCssValue("z-index").then(value => {
				expect(value).toEqual("9999");
				done();
			});
	});

	it("then hide the loading screen", function(done) {
		browser.sleep(1000).then(() => {
			browser.findElement(by.css("#overlay"))
				.getCssValue("opacity").then(value => {
					expect(parseFloat(value)).toBeCloseTo(0, 0);
					done();
				});
		});
	});

	it("then display the the correct view", function(done) {
		browser.findElement(by.css("#home")).then(home => {
			var ready = 0;
			home.getAttribute("class").then(value => {
				expect(value).toContain("active");
				checkReady();
			});
			
			home.getInnerHtml().then(value => {
				expect(value).toContain("<h1>Minh Son Nguyen</h1>");
				checkReady();
			});
			
			function checkReady() {
				ready += 1;
				if (ready === 2) done();
			}
		});
	});
});