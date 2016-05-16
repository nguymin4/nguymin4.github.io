import electron_system_monitor from "./projects/electron-system-monitor.js";
import react_skype_ui from "./projects/react-skype-ui.js";
import react_sortable_demo from "./projects/react-sortable-demo.js";
import personal_website from "./projects/personal-website.js";
import project_euler_python from "./projects/project-euler-python.js";
import bookstore from "./projects/bookstore.js";
import lanban from "./projects/lanban.js";
import productionsoftware_website from "./projects/productionsoftware-website.js";

var getGithubLink = project => project.onGitHub ? `https://github.com/nguymin4/${project.id}` : "";

export default [
	electron_system_monitor,
	react_skype_ui,
	react_sortable_demo,
	personal_website,
	bookstore,
	project_euler_python,
	lanban,
	productionsoftware_website
].map(project => {
	project.github = getGithubLink(project);
	return project;
});