import BaseClass from "./base.js"

class Indicator extends BaseClass {
	constructor(specs) {
		super();
		this.specs = specs;
		this.container = document.getElementById("view-indicators");
	}
	render() {
		var specs = this.specs
		var indicator = document.createElement("a");
		indicator.href = specs.href;
		indicator.title = specs.title;
		indicator.className = "view-indicator";
		indicator.innerHTML = "<span></span><i class='fa " + specs.icon + "'></i>";
		this.container.appendChild(indicator);
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
		{ icon: "fa-user", title: "About me" },
		{ icon: "fa-certificate", title: "Skills and Achievements" },
		{ icon: "fa-code-fork", title: "Projects" },
		{ icon: "fa-gamepad", title: "Interests" }]
		.map((indicator, i) => {
			indicator.href = router.hashes[i]; 
			return indicator })
		.map((indicator) => new Indicator(indicator));


	var active = router.currentViewIndex;

	for (var i = 0; i < indicators.length; i++) {
		indicators[i].render()
			.on("click", function (index) {
				if (active !== index) {
					indicators[active].toggleClass("active");
					indicators[index].toggleClass("active");
					active = index;
				}
			}.bind(null, i));
	}

	indicators[active].toggleClass("active");
}
