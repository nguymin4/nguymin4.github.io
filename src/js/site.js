var documentLoaded = setInterval(function () {
	if (/loaded|complete/.test(document.readyState)) {
		clearInterval(documentLoaded);
		init();
		document.body.className = "loaded"
	}
}, 100);

function init() {
	(function () {
		var smoke = document.getElementsByClassName("smoke");
		var style = window.getComputedStyle(smoke[0]);
		var width = parseInt(style.width);
		for (var i = 0; i < smoke.length; i++) {
			smoke[i].style.left = width * i;
		}
		function floatSmoke() {
			var l;
			for (var i = 0; i < smoke.length; i++) {
				l = parseInt(smoke[i].style.left);
				if (l >= width * 4) l = -width
				smoke[i].style.left = l + 1
			}
			requestAnimationFrame(floatSmoke)
		}

		// requestAnimationFrame(floatSmoke);
	})();
}