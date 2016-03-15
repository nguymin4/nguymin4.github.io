/* global marked */

export var hashes = ["#", "#about-me", "#skills", "#projects", "#interests"];
export var routes = (function () {
	let routes = {};
	let templates = ["home", "about", "skills", "projects", "interests"]
		.map(template => `assets/views/${template}.html`);
	hashes.forEach((hash, i) => routes[hash] = templates[i]);
	return routes;
} ());

export var psOption = {
	suppressScrollX: true,
	scrollYMarginOffset: 25
};

export var markedRenderer = (function () {
	let renderer = new marked.Renderer();
	renderer.heading = (text, level) => `<h${level}>${text}</h${level}>`;
	return renderer;
}());