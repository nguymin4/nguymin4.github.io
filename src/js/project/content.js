import personal_website from "./projects/personal_website.js";
import project_euler_python from "./projects/project_euler_python.js";
import bookstore from "./projects/bookstore.js";
import lanban from "./projects/lanban.js";
import productionsoftware_website from "./projects/productionsoftware_website.js";

var getGithubLink = repo => repo ? `https://github.com/nguymin4/${repo}` : "";

export default [
	personal_website,
	project_euler_python,
	bookstore,
	lanban,
	productionsoftware_website,
].map(project => {
	project.github = getGithubLink(project.github);
	return project;
});