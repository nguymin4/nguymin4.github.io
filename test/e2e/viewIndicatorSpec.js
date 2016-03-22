describe(`[${browserName}] View indicators`, function() {
	var items = [];

	beforeAll(done => {
		browser.get("http://localhost:3000");
		
		browser.sleep(1500).then(() => {
			browser.findElements(by.css(".view-indicator"))
				.then(_items => {
					items = _items;
					done();
				});
		});
	});

	it("should have 5 items", () => {
		expect(items.length).toEqual(5);
	});

	describe("when one item is clicked, the corresponding view", () => {
			
		it("should be active", done => {
			var ready = 0;

			items[1].click();

			browser.findElement(by.css("#about"))
				.getAttribute("class")
				.then(value => {
					expect(value).toContain("active");
					checkReady();
				});

			browser.findElement(by.css("#home"))
				.getAttribute("class")
				.then(value => {
					expect(value).not.toContain(" active");
					checkReady();
				});
				
			browser.getCurrentUrl().then(value => {
				expect(value).toContain("#about-me");
				checkReady();
			});

			function checkReady() {
				ready += 1;
				if (ready === 3) done();
			}
		});

		it("should display correct content", done => {
			var ready = 0;

			browser.findElement(by.css("#about h2")).getText()
				.then(value => {
					expect(value).toEqual("About me");
					checkReady();
				});

			browser.findElements(by.css("#about #contact .fa"))
				.then(_items => {
					expect(_items.length).toEqual(3);
					checkReady();
				});

			browser.findElement(by.css("#about .col-sm-9")).getInnerHtml()
				.then(value => {
					expect(value.length).toBeGreaterThan(200);
					expect(value).toContain("IT");
					checkReady();
				});

			function checkReady() {
				ready += 1;
				if (ready === 3) done();
			}
		});

	});
});