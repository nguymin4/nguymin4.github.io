import View from "./view.js";

var hashes = ["#", "#about-me", "#skills", "#projects", "#interests"];
var routes = mapRoutes(); 

function mapRoutes() {
	var routes = {}
	var templates = ["home", "about", "skills", "projects", "interests"]
		.map(template => "assets/views/" + template + ".html");
	
	hashes.forEach((hash, i) => routes[hash] = templates[i]);
	return routes;
}

function initViews($container) {
	return hashes.map(hash => {
		hash = hash || "#";
		var view = new View(hash, routes[hash]);
		view.$html.appendTo($container);
		return view;
	});
}

export default function () {
	var active = 0;
	var views = initViews($("#content"));

	function getViewIndex() {
		var active = hashes.indexOf(location.hash);
		return (active === -1) ? 0 : active;
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