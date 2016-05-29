import BaseClass from "../shared/base.js";
import app from "../shared/app.js";
import htmlViews from "./htmlViews.js";

var isMobile = app.env.isMobile;
var psOption = app.config.psOption;

export default class View extends BaseClass {
	constructor(hash, route, $container) {
		super({
			tagName: "section",
			container: $container,
			model: {
				hash: hash,
				route: route,
				id: /\/(\w+).html/.exec(route)[1]
			}
		});
	}
	load() {
		var content = htmlViews[this.model.id];
		var $html = this.$html;
		var req = content ? $.Deferred() : $.ajax(this.model.route);

		req.done((data, status, xhr) => {
			$html.html(data);
		}).fail((data, status, xhr) => {
			$html.html("");
		}).always(() => {
			isMobile ? 
				$html.css("overflow-y", "scroll") :
				$html.perfectScrollbar(psOption);
		});

		if (content) return req.resolve(content);
		return req;
	}
	render() {
		this.$html.attr({
			id: this.model.id,
			class: "view"
		});

		return this;
	}
	wiredEvent() {
		if (isMobile)
			$(window).on("resize", () => this.$html.perfectScrollbar("update"));
	}
	
	toggleClass(className) {
		var $html = this.$html;
		// Temporarily disable scrollbar when change view
		$html.css("overflow-y", "hidden").toggleClass(className);
		if (isMobile)
			setTimeout(() => $html.css("overflow-y", "scroll"), 1000);
		return this;
	}
	toggleScroll(active) {
		var overflow = active ? "scroll" : "hidden";
		var option = active ? psOption : "destroy";
		if (!isMobile) this.$html.perfectScrollbar(option);
		else this.$html.css("overflow-y", overflow);
	}
}