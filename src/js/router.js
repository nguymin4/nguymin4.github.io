import View from "./view.js";

export default function () {
	var routes = {}, active = 0;
	var hashes = ["#", "#about-me", "#skills", "#projects", "#interests"];
	var templates = ["home", "about", "skills", "projects", "interests"]
		.map((template) => "views/" + template + ".html");

	hashes.forEach((hash, i) => routes[hash] = templates[i]);

	var views = hashes.map((hash) => {
		hash = hash || "#";
		return new View(hash, routes[hash])
	});

	function getViewIndex() {
		var active = hashes.indexOf(location.hash);
		return (active == -1) ? 0 : active;
	}

	window.addEventListener("hashchange", function () {
		var index = getViewIndex();
		views[active].toggleClass("active");
		views[index].toggleClass("active");
		active = index;
		$(router).trigger("viewIndexChanged", [active]);
	});

	var router = {
		hashes: hashes,
		preloadViews: function (callback) {
			callback = typeof callback === "function" ? callback : function () { };
			var deferreds = views.map(view => view.load());
			$.when(deferreds).always(() => {
				active = getViewIndex();
				views[active].toggleClass("active");
				callback();
			});
		},
		currentViewIndex: getViewIndex()
	}
	
	return router;
}