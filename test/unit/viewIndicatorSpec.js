/* global setFixtures */
import Indicator from "indicator/indicator.js";

describe("View indicators", () => {
	var $container;
	var indicators = [];
	var iconList = [
		{ icon: "fa-home", title: "Home", href: "#" },
		{ icon: "fa-user", title: "About", href: "#about-me" }
	];
	
	beforeAll(() => {
		setFixtures(`<div id="view-indicators"></div>`);
		$container = $("#view-indicators");
		indicators = iconList.map(model => new Indicator(model, $container));
	});

	it("should render correctly", () => {
		var $html = indicators[0].$html;
		var model = iconList[0];
		expect($("i", $html)).toHaveHtml(model.title);
		expect($html).toHaveAttr("href", model.href);
	});

	describe("and the container", () => {
		it("should display correct number of indicators", () => {
			expect($(".view-indicator", $container).length).toEqual(iconList.length);
		});
	});
});