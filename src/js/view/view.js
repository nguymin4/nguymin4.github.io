/* global MobileDetect */

var md = new MobileDetect(window.navigator.userAgent);

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
		
		// Deprecated used background-image instead of set opacity
		// var event = md.mobile() ? "scroll" : "ps-scroll-y";	
		// $(self.html).on(event, function () {
		// 	self.setIndicatorOpacity();
		// });
		
		return this;
	}
	toggleClass(className) {
		var $html = this.$html;
		$html.css("overflow-y", "hidden").toggleClass(className);
		setTimeout(function () {
			$html.css("overflow-y", "scroll");
		}, 1000);
		// this.setIndicatorOpacity();
		return this;
	}
	// Deprecated because of using background-image
	setIndicatorOpacity() {
		var top = this.$html.scrollTop();
		$(document).trigger("viewIndicatorOpacity", [top / 200]);
	}
	recalibratePerfectScrollbar() {
		var $html = this.$html;
		$html.perfectScrollbar({
			suppressScrollX: true,
			scrollYMarginOffset: 20
		});

		window.addEventListener("resize", function () {
			$html.perfectScrollbar("update");
		});
	}
}