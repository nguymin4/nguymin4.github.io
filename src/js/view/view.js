import BaseClass from "../shared/base.js";
import app from "../shared/app.js";
import htmlViews from "./htmlViews.js"

var isMobile = app.env.isMobile;
var psOption = app.config.psOption;

export default class View extends BaseClass {
	constructor(hash, route, $container) {
		super("section", $container, {
			hash: hash,
			route: route,
			id: /\/(\w+).html/.exec(route)[1]
		});
	}
	load() {
		var content = htmlViews[this.model.id];
		var req = content ? $.Deferred() : $.ajax(this.model.route); 
		
		req.done((data, status, xhr) => {
			this.$html.html(data);
		}).fail((data, status, xhr) => {
			this.$html.html("");
		}).always(() => {
			if (!isMobile) this.recalibratePerfectScrollbar();
		});
		
		if (content) return req.resolve(content);
		return req;
	}
	render() {
		this.$html.attr({
			id: this.model.id,
			class: "view"
		}).css("overflow-y", "hidden");

		return this;
	}
	toggleClass(className) {
		var $html = this.$html;
		$html.css("overflow-y", "hidden").toggleClass(className);
		if (isMobile)
			setTimeout(() => $html.css("overflow-y", "scroll"), 1250);
		return this;
	}
	recalibratePerfectScrollbar() {
		var $html = this.$html;
		$html.perfectScrollbar(psOption);
		window.addEventListener("resize", () => $html.perfectScrollbar("update"));
	}
	toggleScroll(active) {
		var overflow = active ? "scroll" : "hidden";
		var option = active ? psOption : "destroy";
		this.$html.css("overflow-y", overflow);
		if (!isMobile) this.$html.perfectScrollbar(option);
	}
}