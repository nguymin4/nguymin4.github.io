/* global MobileDetect */

var md = new MobileDetect(window.navigator.userAgent);
var psOption = {
	suppressScrollX: true,
	scrollYMarginOffset: 25
};

export default class View {
	constructor(hash, route) {
		this.hash = hash;
		this.route = route;
		this.id = /\/(\w+).html/.exec(this.route)[1];
		this.render();
	}
	load() {
		var self = this;
		return $.ajax(self.route)
			.done(function (data, status, xhr) {
				self.$html.html(data);
			}).fail(function (data, status, xhr) {
				self.$html.html("");
			}).always(function () {
				if (!md.mobile()) self.recalibratePerfectScrollbar();
			});
	}
	render() {
		this.$html = $("<section></section>").attr({
			id: this.id,
			class: "view"
		}).css("overflow-y", "hidden");
		return this;
	}
	toggleClass(className) {
		var $html = this.$html;
		$html.css("overflow-y", "hidden").toggleClass(className);
		if (md.mobile()) 
			setTimeout(() => $html.css("overflow-y", "scroll"), 1250);
		return this;
	}
	recalibratePerfectScrollbar() {
		var $html = this.$html;
		$html.perfectScrollbar(psOption);

		window.addEventListener("resize", function () {
			$html.perfectScrollbar("update");
		});
	}
	toggleScroll(active) {
		var overflow = active ? "scroll" : "hidden";
		var option = active ? psOption : "destroy";
		this.$html.css("overflow-y", overflow);
		if (!md.mobile()) this.$html.perfectScrollbar(option);
	}
}