import BaseClass from "../shared/base.js";
import app from "../shared/app.js";

var isMobile = app.env.isMobile;

export default class ProjectDetail extends BaseClass {
	constructor($container) {
		super("div", $container);
	}
	render() {
		this.$html.attr({
			class: "container project-detail"
		}).html(`<i class="fa fa-chevron-circle-down btn-close"></i>
				<div class="detail"></div>`);

		this.$contentBox = $(".detail", this.$html);
		return this;
	}
	wiredEvent() {
		this.on(".btn-close click", () => {
			this.$html.removeClass("active");
			setTimeout(() => {
				this.$html.css("top", 0);
				app.channel.trigger("view:toggleScroll", ["projects", true]);
			}, 750);
		});

		if (!isMobile) this.$contentBox.perfectScrollbar(app.config.psOption);
		return this;
	}
	addContent(content) {
		this.$contentBox.html("<hr />" + content);
		if (!isMobile) this.$contentBox.perfectScrollbar("update");
		app.channel.trigger("view:toggleScroll", ["projects", false]);
		
		this.$html.css({
			top: this.$container.scrollTop()
		}).addClass("active");
		return this;
	}
}