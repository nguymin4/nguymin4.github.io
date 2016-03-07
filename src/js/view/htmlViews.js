// Key is view id and value is its innerHTML
var views = {};

[
	{
		id: "projects",
		class: "project-list",
		title: "Projects &amp; Works"
	}, {
		id: "interests",
		title: "Interests"
	}
].forEach(view => {
	views[view.id] = `
		<div class="container">
			<div class="row ${view.class || ""}">
				<h2>${view.title}</h2>
			</div>
		</div>`;
});

export default views;