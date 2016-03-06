import BaseClass from "../shared/base.js";
import app from "../shared/app.js";

var isMobile = app.env.isMobile;

export default class ProjectDetail extends BaseClass {
	constructor($container) {
		super({ 
			tagName: "div", 
			container: $container 
		});
	}
	render() {
		this.$html.attr({
			class: "container project-detail"
		}).html(`<div class="detail">
					<div class="detail-top">
						<i class="fa fa-chevron-circle-up btn-close"></i>
						<hr />
					</div>
					<div class="detail-body">
						<div class="content-box"></div>
					</div>
				</div>`);

		this.$contentBox = $(".content-box", this.$html);
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

		if (!isMobile)
			this.$detailBody = $(".detail-body", this.$html)
				.perfectScrollbar(app.config.psOption);

		return this;
	}
	addContent(content) {
		this.$contentBox.html(content);
		if (!isMobile) this.$detailBody.perfectScrollbar("update");
		app.channel.trigger("view:toggleScroll", ["projects", false]);

		this.$html.css({
			top: this.$container.scrollTop()
		}).addClass("active");
		return this;
	}
}