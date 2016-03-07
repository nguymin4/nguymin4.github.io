import BaseClass from "../shared/base.js";
import app from "../shared/app.js";
import htmlViews from "./htmlViews.js"

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
		var req = content ? $.Deferred() : $.ajax(this.model.route);

		req.done((data, status, xhr) => {
			this.$html.html(data);
		}).fail((data, status, xhr) => {
			this.$html.html("");
		}).always(() => {
			if (!isMobile) {
				this.$html.perfectScrollbar(psOption);
				$(window).on("resize", () => this.$html.perfectScrollbar("update"));
			} else {
				this.$html.css("overflow-y", "scroll");
			};
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
		app.channel.on("view:updateScroll", (event, id) => {
			if (this.model.id === id && !isMobile)
				this.$html.perfectScrollbar("update");
		}).on("view:toggleScroll", (event, id, state) => {
			if (this.model.id === id) 
				this.toggleScroll(state);
		});
	}
	
	toggleClass(className) {
		var $html = this.$html;
		// Temporarily disable scrollbar when change view
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
		if (!isMobile) this.$html.perfectScrollbar(option);
		else this.$html.css("overflow-y", overflow);
	}
}