var container = $("#content");

export default class View {
	constructor(hash, route) {
		this.hash = hash;
		this.route = route;
		this.id = /\/(\w+).html/.exec(this.route)[1];
	}

	load() {
		var self = this;
		self.render();

		return $.ajax(self.route)
			.done(function (data, status, xhr) {
				self.html.innerHTML = data;
			}).fail(function (data, status, xhr) {
				self.html.innerHTML = "";
			});
	}

	render() {
		var section = document.createElement("section");
		section.className = "view";
		section.id = this.id;
		container.append(section);
		this.html = section;
		return this;
	}

	toggleClass(className) {
		$(this.html).toggleClass(className);
		return this;
	}
}