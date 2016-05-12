var async = require("../helper/async.js");

describe(`[${browserName}] Projects section,`, function() {
	var items = [];
	var detail = {
		content: `<h4>Mimic Skype Web UI using React</h4>`,
		github: "https://github.com/nguymin4/react-skype-ui"
	};

	beforeAll(done => {
		async.waterfall([
			() => browser.get("http://localhost:3000/#projects"),
			() => browser.sleep(200),
			() => browser.findElements(by.css(".project"))
		])
			.then(_items => items = _items)
			.then(done);
	});
	
	it("should have at least one project", () => {
		expect(items.length).toBeGreaterThan(1);
	});

	describe("the project detail view, ", () => {
		var projectDetail;
		var btnClose;
		var btnGithub;

		beforeAll(done => {
			async.parallel([
				browser.findElement(by.css(".project-detail"))
					.then(el => projectDetail = el),
				browser.findElement(by.css(".project-detail .btn-close"))
					.then(el => btnClose = el),
				browser.findElement(by.css(".project-detail .btn-github"))
					.then(el => btnGithub = el)
			]).then(done);
		});

		describe("when a project is clicked, ", () => {

			beforeAll(done => items[0].click().then(done));

			it("should open", done => {
				projectDetail.getAttribute("class")
					.then(value => expect(value).toContain(" active"))
					.then(done);
			});

			it("should display correct content", done => {
				projectDetail.findElement(by.css(".content-box"))
					.getInnerHtml()
					.then(value => expect(value).toContain(detail.content))
					.then(done);
			});

			it("should close when close button is clicked", done => {
				async.waterfall([
					() => btnClose.click(),
					() => projectDetail.getAttribute("class")
				])
					.then(value => expect(value).not.toContain(" active"))
					.then(done);
			});
		});

		describe("when personal website project is clicked", () => {

			it("should display GitHub icon with link to repo", done => {

				async.waterfall([
					() => browser.sleep(250),
					() => items[0].click(),
					() => btnGithub.getAttribute("href")
						.then(value => expect(value).toEqual(detail.github)),
					() => btnGithub.getCssValue("visibility")
						.then(value => expect(value).toEqual("visible"))
				]).then(done);
			});
		});

		describe("when Production Software project is clicked", () => {
			beforeAll(done => {
				var script = `
					var divs = document.querySelectorAll(".project .title");
					[].forEach.call(divs, function(div) {
						if (div.innerHTML.search("Production Software") !== -1 )
							div.click();
					});
				`;
				async.waterfall([
					() => browser.sleep(250),
					() => browser.executeScript(script)
				]).then(done);
			});

			it("should not display GitHub icon with link to repo", done => {
				async.waterfall([
					() => btnGithub.getAttribute("href")
						.then(value => expect(value).toEqual("")),
					() => btnGithub.getCssValue("visibility")
						.then(value => expect(value).toEqual("hidden"))
				]).then(done);
			});
		});
	});
});