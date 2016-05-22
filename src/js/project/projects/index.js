var req = require.context("./", false, /^.*\.js$/);
var excludes = ["index"];

export default req.keys()
	.filter(shouldInclude)
	.map(key => req(key).default)
	.map(getGitHubLink)
	.sort((a, b) => a.createdOn < b.createdOn);

function getGitHubLink(project) {
	var url = `https://github.com/nguymin4/${project.id}`;
	project.github = project.onGitHub ? url : "";
	return project;
}

function shouldInclude(key) {
	if (excludes.length === 0) return true;
	var index = excludes.findIndex(e => key.indexOf(e) !== -1);
	if (index !== -1) {
		excludes.splice(index, 1);
		return false;
	}
	return true;
}