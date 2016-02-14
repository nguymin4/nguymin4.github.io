import BaseClass from "./base.js"

var active;

class Indicator extends BaseClass {
	constructor(specs) {
		super(null);
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
	}
	toggleClassName(className, on) {
		className = " " + className;
		var html = this.html;
		if (html.className.indexOf(className) === -1 || on)
			html.className += className;
		else
			html.className = html.className.replace(className, "");
	}
}

var indicators = [
	{ icon: "fa-home", title: "Home", href: "#" },
	{ icon: "fa-user", title: "About me", href: "#about-me" },
	{ icon: "fa-trophy", title: "Achievements and Certificates", href: "#achievements" },
	{ icon: "fa-code-fork", title: "Projects", href: "#projects" },
	{ icon: "fa-gamepad", title: "Interests", href: "#interests" }
].map(specs => new Indicator(specs));


export default function (router) {
	for (var i = 0; i < indicators.length; i++) {
		indicators[i].render();
		indicators[i].on("click", function (index) {
			if (active !== index) {
				indicators[active].toggleClassName("active");
				indicators[index].toggleClassName("active");
				active = index;
			}
		}.bind(null, i));
	}
	active = router.getViewIndex();
	indicators[active].toggleClassName("active");
}
