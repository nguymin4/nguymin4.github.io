import BaseClass from "./base.js"
var $container;
 
class Indicator extends BaseClass {
	constructor(model) {
		super("a", $container); 
		this.model = model;
	}
	render() {
		var model = this.model;
		this.$html.attr({
			href: model.href,
			title: model.title,
			class: "view-indicator"
		}).html(`<i>${model.title}</i><span></span>`);
		return this;
	}
	toggleClass(className) {
		this.$html.toggleClass(className);
		return this;
	}
}

export default function (router) {
	$container = $("#view-indicators");
	var indicators = [
		{ icon: "fa-home", title: "Home" },
		{ icon: "fa-user", title: "About" },
		{ icon: "fa-certificate", title: "Skills" },
		{ icon: "fa-code-fork", title: "Projects" },
		{ icon: "fa-gamepad", title: "Interests" }]
		.map((indicator, i) => {
			indicator.href = router.hashes[i]; 
			return indicator })
		.map(indicator => new Indicator(indicator).render())
	
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
