// Key is view id and value is its innerHTML
var req = file => require(`../../html/views/${file}.html`);
var views = {};

[
	{ id: "home", external: true },
	{ id: "about", external: true },
	{ id: "skills", external: true },
	{
		id: "projects",
		class: "project-list",
		title: "Projects &amp; Works"
	}, {
		id: "interests",
		title: "Interests"
	}
].forEach(view => {
	var className = view.class ? " " + view.class : "";
	views[view.id] = view.external ?
		req(view.id) :
		`<div class="container">
			<div class="row${className}">
				<h2>${view.title}</h2>
			</div>
		</div>`;
});

export default views;