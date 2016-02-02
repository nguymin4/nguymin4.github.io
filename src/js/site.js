(function () {
	var smoke = document.getElementsByClassName("smoke");
	for (var i = 0; i < smoke.length; i++) {
		smoke[i].style.left = 574 * (i - 1);
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
} ());

