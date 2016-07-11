/* global setFixtures */
import Project from "project/project.js";
import models from "project/projects";

describe("Projects section", function() {
	var $container;
	var projects;
	var $html;
	var model = models[0];

	beforeAll(() => {
		setFixtures(`
		<div id="projects">
			<div class="container project-list"></div>
		</div>`);
		$container = $("#projects .project-list");
		projects = models.map(model => new Project(model, $container));
		$html = projects[0].$html;
	});

	it("should display projects", function() {
		expect($("> a", $container).length).toEqual(models.length);
	});

	describe("projects", function() {

		it("should render correctly", function() {
			expect($("img", $html)).toHaveAttr("src", model.thumbnail);
		});

		it("should have correct content", function() {
			expect($(".title", $html)).toHaveHtml(model.title);
		});
	});
});
