/* global setFixtures */
import Achievement from "achievement/achievement.js";
import models from "achievement/content.js";

describe("Achievement section", () => {
	var $container;
	var achievements = [];
	
	beforeAll(() => {
		setFixtures(`<div id="container"></div>`);
		$container = $("#container");
		achievements = models.map(model => new Achievement(model, $container));
	});

	it("should display items", function() {
		expect($("> div", $container).length).toEqual(models.length);
	});
	
	describe("and items", function() {
		var $html;		
		var model = models[0];
		
		beforeAll(() => $html = achievements[0].$html);
		
		it("should render correctly", function() {
			expect($html).toHaveClass("achievement");
		});

		it("should have correct content", function() {
			expect($("img", $html)).toHaveAttr("src", model.logo);
			expect($(".name", $html)).toHaveHtml(model.name);
			expect($("a", $html)).toHaveAttr("href", model.url);
		});
	});
});