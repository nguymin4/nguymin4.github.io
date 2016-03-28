import View from "./view.js";
import app from "../shared/app.js";
var hashes = app.config.hashes,
	routes = app.config.routes,
	isMobile = app.env.isMobile;

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

export default function() {
	var active = 0;
	var views = initViews();
	var findViewIndex = id => views.findIndex(view => view.model.id === id);

	$(window).on("hashchange", () => {
		var index = getViewState().activeViewIndex;
		views[active].toggleClass("active");
		views[index].toggleClass("active");
		active = index;
		app.channel.triggerHandler("viewIndicator:viewIndexChanged", [active]);
	});

	app.channel.on("view:updateScroll", (event, id) => {
		var index = findViewIndex(id);
		if (!isMobile)
			views[index].$html.perfectScrollbar("update");
	}).on("view:toggleScroll", (event, id, state) => {
		var index = findViewIndex(id);
		views[index].toggleScroll(state);
	});



	var router = {
		preloadViews: function(callback) {
			callback = typeof callback === "function" ? callback : function() { };
			var deferreds = views.map(view => view.load());
			$.when(deferreds).done(() => {
				active = getViewState().activeViewIndex;
				views[active].toggleClass("active");
				callback();
			});
			return this;
		},
		initialViewIndex: getViewState().activeViewIndex
	};

	return router;
}