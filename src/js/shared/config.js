/* global marked */

var hashes = ["#", "#about-me", "#skills", "#projects", "#interests"];
var routes = (function () {
	let routes = {};
	let templates = ["home", "about", "skills", "projects", "interests"]
		.map(template => `assets/views/${template}.html`);
	hashes.forEach((hash, i) => routes[hash] = templates[i]);
	return routes;
} ());

var markedRenderer = (function () {
	let renderer = new marked.Renderer();
	renderer.heading = (text, level) => `<h${level}>${text}</h${level}>`;
	return renderer;
} ());

export default {
	hashes: hashes,
	routes: routes,
	psOption: {
		suppressScrollX: true,
		scrollYMarginOffset: 25
	},
	markedRenderer: markedRenderer
};