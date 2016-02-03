var documentLoaded = setInterval(function () {
	if (/loaded|complete/.test(document.readyState)) {
		clearInterval(documentLoaded);
		document.body.className = "loaded"
		init();
	}
}, 100);

function init() {
	(function () {
		var smoke = document.getElementsByClassName("smoke");
		for (var i = 0; i < smoke.length; i++) {
			smoke[i].style.left = 574 * i;
		}
		function floatSmoke() {
			var l;
			for (var i = 0; i < smoke.length; i++) {
				l = parseInt(smoke[i].style.left);
				if (l >= 574 * 4) l = -574
				smoke[i].style.left = l + 1
			}
			requestAnimationFrame(floatSmoke)
		}

		// requestAnimationFrame(floatSmoke);
	})();
}