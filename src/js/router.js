export default function () {
	var container = $("#content");
	var views = {
		"#": "views/main.html",
		"#about-me": "views/about.html",
		"#achievements": "views/achievements.html",
		"#projects": "views/projects.html",
		"#interests": "views/interests.html",
	}
	var hashes = ["#", "#about-me", "#achievements", "#projects", "#interests"];

	function loadView(hash) {
		return $.ajax(views[hash || "#"])
			.done(function (data, status, xhr) {
				container.html(data);
			}).fail(function(data, status, xhr) {
				container.html("");
			});
	}

	window.addEventListener("hashchange", function () {
		loadView(location.hash);
	});

	return {
		loadView: loadView,
		preloadViews: () => hashes.map((hash) => loadView(hash)),
		getViewIndex: function () {
			var active = hashes.indexOf(location.hash);
			return (active == -1) ? 0 : active;
		}
	}
}