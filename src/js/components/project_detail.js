/* global MobileDetect */

var md = new MobileDetect(window.navigator.userAgent);
var $router;
var $detailView = {
	init: (selector, router) => {
		$router = $(router);
		var self = $detailView;
		self.$html = $(selector);
		self.$detail = $(".detail", self.$html)
			.perfectScrollbar({
				suppressScrollX: true,
				scrollYMarginOffset: 25
			});
		self.wiredEvent();
		return self;
	},
	render: (content, top) => {
		var self = $detailView;
		self.$html.css("top", top).addClass("active");
		self.$detail.html("<hr />" + content).perfectScrollbar("update");
		$router.trigger("view:toggleScroll", ["projects", false]);
		return self;
	},
	wiredEvent: () => {
		var self = $detailView;
		$(".btn-close", self.$html).on("click", () => {
			self.$html.removeClass("active");
			setTimeout(() => {
				$router.trigger("view:toggleScroll", ["projects", true]);
				self.$html.css("top", 0);
			}, 500);
		});
	}
}

export default $detailView;