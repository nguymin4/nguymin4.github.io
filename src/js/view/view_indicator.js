import BaseClass from "../shared/base.js"
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
	
	var active =  router.initialViewIndex;
	indicators[active].toggleClass("active");
	
	$(router).on("viewIndicator:viewIndexChanged", function(e, index) {
		indicators[active].toggleClass("active");
		indicators[index].toggleClass("active");
		active = index;
		
	});
}
