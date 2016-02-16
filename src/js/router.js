export default function () {
	var container = $("#content");
	var hashes = ["#", "#about-me", "#skills", "#projects", "#interests"];
	var templates = ["main", "about", "skills", "projects", "interests"]
		.map((template) => "views/" + template + ".html")
	
	var views = {};
	hashes.forEach((hash, i) => views[hash] = templates[i]);

	function loadView(hash) {
		return $.ajax(views[hash || "#"])
			.done(function (data, status, xhr) {
				container.html(data);
			}).fail(function (data, status, xhr) {
				container.html("");
			});
	}

	window.addEventListener("hashchange", function () {
		loadView(location.hash);
	});

	return {
		hashes: hashes,
		loadView: loadView,
		preloadViews: () => hashes.map((hash) => loadView(hash)),
		getViewIndex: function () {
			var active = hashes.indexOf(location.hash);
			return (active == -1) ? 0 : active;
		}
	}
}