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

function getViewState() {
	var state = {};
	var rootHash = location.hash ? /(#[\w-]+)/.exec(location.hash)[1] : "#"; 
		
	// root state - index based on hashes array
	var active = hashes.indexOf(rootHash);
	state.activeViewIndex = active === -1 ? 0 : active;
		
	// sub state
	var args = location.hash.replace(rootHash, "").split("/").slice(1);
	for (var i = 0; i < args.length; i++)
		if (i % 2 === 0) state[args[i]] = "";
		else state[args[i - 1]] = args[i];

	return state;
}

export default function () {
	var active = 0;
	var views = initViews($("#content"));

	window.addEventListener("hashchange", function () {
		var index = getViewState().activeViewIndex;
		views[active].toggleClass("active");
		views[index].toggleClass("active");
		active = index;
		$(router).trigger("viewIndicator:viewIndexChanged", [active]);
	});

	var router = {
		hashes: hashes,
		preloadViews: function (callback) {
			callback = typeof callback === "function" ? callback : function () { };
			var deferreds = views.map(view => view.load());
			$.when(deferreds).always(() => {
				active = getViewState().activeViewIndex;
				views[active].toggleClass("active");
				callback();
			});
			return this;
		},
		initialViewIndex: getViewState().activeViewIndex
	}
	
	$(router).on("view:toggleScroll", function(e, id, state) {
		for (var i = 0; i< views.length; i++) {
			if (views[i].id === id) {
				views[i].toggleScroll(state);
				break;
			}
		}
	});
	
	return router;
}