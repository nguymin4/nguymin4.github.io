var smokes, width;
var n = 2;

// For testing purpose - no use at all
function floatSmoke() {
	var i, l;
	for (i = 0; i < smokes.length; i++) {
		l = parseInt(smokes[i].style.left);
		if (l >= width * 4) l = -width;
		smokes[i].style.left = l + 1;
	}
	requestAnimationFrame(floatSmoke);
}

export default function () {
	var $container = $("#smokes");
	width = $(".smoke:first").width();
	$container.html("");

	for (var i = 0; i <= n; i++) {
		$("<div></div>")
			.addClass("smoke")
			.css("left", width * i)
			.appendTo($container);
	}
	
	// requestAnimationFrame(floatSmoke);
}
