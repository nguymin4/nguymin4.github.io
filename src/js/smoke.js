var smoke = document.getElementsByClassName("smoke");
var width;

function floatSmoke() {
	var l;
	for (var i = 0; i < smoke.length; i++) {
		l = parseInt(smoke[i].style.left);
		if (l >= width * 4) l = -width
		smoke[i].style.left = l + 1
	}
	requestAnimationFrame(floatSmoke)
}

export default function () {
	var style = window.getComputedStyle(smoke[0]);
	width = parseInt(style.width);
	
	for (var i = 0; i < smoke.length; i++)
		smoke[i].style.left = width * i;
	// requestAnimationFrame(floatSmoke);
}
