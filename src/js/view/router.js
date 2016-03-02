import View from "./view.js";
import app from "../shared/app.js";
var hashes = app.config.hashes,
	routes = app.config.routes;

function initViews() {
	var $container = $("#content");
	return hashes.map(hash => {
		hash = hash || "#";
		return new View(hash, routes[hash], $container);
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
	var views = initViews();

	$(window).on("hashchange", () => {
		var index = getViewState().activeViewIndex;
		views[active].toggleClass("active");
		views[index].toggleClass("active");
		active = index;
		app.channel.trigger("viewIndicator:viewIndexChanged", [active]);
	});
	
	app.channel.on("view:toggleScroll", (e, id, state) => {
		for (var i = 0; i < views.length; i++) {
			if (views[i].model.id === id) {
				views[i].toggleScroll(state);
				break;
			}
		}
	});
	
	var router = {
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

	return router;
}