import BaseClass from "./base.js"
var $container = $("#view-indicators");
 
class Indicator extends BaseClass {
	constructor(specs) {
		super();
		this.specs = specs;
	}
	render() {
		var specs = this.specs
		var indicator = document.createElement("a");
		indicator.href = specs.href;
		indicator.title = specs.title;
		indicator.className = "view-indicator";
		// indicator.innerHTML = "<i class='fa " + specs.icon + "'></i><span></span>";
		indicator.innerHTML = "<i>"+specs.title+"</i><span></span>";
		$container.append(indicator);
		this.html = indicator;
		return this;
	}
	toggleClass(className) {
		$(this.html).toggleClass(className);
		return this;
	}
}

export default function (router) {
	var indicators = [
		{ icon: "fa-home", title: "Home" },
		{ icon: "fa-user", title: "About" },
		{ icon: "fa-certificate", title: "Skills" },
		{ icon: "fa-code-fork", title: "Projects" },
		{ icon: "fa-gamepad", title: "Interests" }]
		.map((indicator, i) => {
			indicator.href = router.hashes[i]; 
			return indicator })
		.map((indicator) => new Indicator(indicator));
	
	indicators.forEach(indicator => indicator.render());
	
	var active =  router.currentViewIndex;
	indicators[active].toggleClass("active");
	$(router).on("viewIndexChanged", function(e, index, init) {
		indicators[index].toggleClass("active");
		if (!init) indicators[active].toggleClass("active");
		active = index;
	});
	
	// Deprecated because of using background-image 
	// $(document).on("viewIndicatorOpacity", function(event, opacity) {
	// 	$container.css("background-color", "rgba(37, 57, 84, " + opacity + ")");
	// });
}
