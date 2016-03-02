/* global marked */
import markedRenderer from "../shared/config.js"
import projectList from "./content.js";
import Project from "./project.js";

export default function () {
	var $container = $("#projects .project-list");
	Project.setDetailView();

	projectList.map(model => {
		model.info = marked(model.info, { renderer: markedRenderer }).replace(/\n/g, "");
		return new Project(model, $container);
	});
}
