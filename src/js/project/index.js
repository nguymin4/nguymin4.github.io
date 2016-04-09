import app from "../shared/app.js";
import projectList from "./content.js";
import Project from "./project.js";

export default function() {
	var $container = $("#projects .project-list");
	Project.setDetailView($("#projects"));

	var projects = projectList.map(model => new Project(model, $container));
	app.channel.on("view:subState", (event, state) => {
		if (state.detail) {
			projects.find(project => project.model.id === state.detail)
				.openDetailView();
		}
	});
}
