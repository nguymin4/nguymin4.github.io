var active;
var indicators = document.getElementsByClassName("view-indicator");

function toggle(index) {
	indicators[active].className = indicators[active].className.replace("active", "")
	indicators[index].className += " active";
	active = index
}

export default function (router) {
	active = router.getViewIndex();
	toggle(active);

	for (var i = 0; i < indicators.length; i++)
		indicators[i].addEventListener("click", toggle.bind(null, i));
}
