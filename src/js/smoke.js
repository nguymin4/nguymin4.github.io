var smokes, width, l;
var n = 3;

function floatSmoke() {
	for (var i = 0; i < smokes.length; i++) {
		l = parseInt(smokes[i].style.left);
		if (l >= width * 4) l = -width;
		smokes[i].style.left = l + 1;
	}
	requestAnimationFrame(floatSmoke);
}

export default function () {
	var container = document.getElementById("smokes");
	var smoke = document.getElementsByClassName("smoke")[0];
	var style = window.getComputedStyle(smoke);
	width = parseInt(style.width);
	container.removeChild(smoke);
	
	var smokes = []
	for (var i = 0; i <= n; i++) {
		smoke = document.createElement("div");
		container.appendChild(smoke);
		smokes.push(smoke);
	}
	
	smokes.forEach((smoke, i) => {
		smoke.style.left = width * i;
		smoke.className = "smoke"
	});
	
	// requestAnimationFrame(floatSmoke);
}
