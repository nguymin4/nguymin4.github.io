var width;
var n = 2;

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
}
