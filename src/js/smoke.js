var smokes, width, l;
var n = 7;

function floatSmoke() {
	for (var i = 0; i < smokes.length; i++) {
		l = parseInt(smokes[i].style.left);
		if (l >= width * 4) l = -width;
		smokes[i].style.left = l + 1;
	}
	requestAnimationFrame(floatSmoke);
}

export default function () {
	var smoke = document.getElementsByClassName("smoke")[0];
	var style = window.getComputedStyle(smoke);
	width = parseInt(style.width);
	
	var container = document.getElementById("smokes");
	
	for (var i = 1; i <= n; i++) {
		smoke = document.createElement("div");
		smoke.className = "smoke";
		smoke.style.left = width * i;
		container.appendChild(smoke);
	}
		
		
	// requestAnimationFrame(floatSmoke);
}
