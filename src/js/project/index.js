import projectList from "./content.js";
import Project from "./project.js";

export default function () {
	var $container = $("#projects .project-list");
	Project.setDetailView($("#projects"));

	projectList.map(model => {
		
		return new Project(model, $container);
	});
}
