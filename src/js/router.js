export default function () {
	var hash = ["#", "#about-me", "#achievements", "#projects", "#interests"];

	var getViewIndex = function () {
		var active = hash.indexOf(location.hash);
		console.log(active, location.hash);
		return (active == -1) ? 0 : active;
	};

	window.addEventListener("hashchange", function () {
		console.log(location.hash);
	});

	return {
		hash: hash,
		getViewIndex: getViewIndex
	}
}