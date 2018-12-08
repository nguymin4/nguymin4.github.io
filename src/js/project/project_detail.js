import BaseClass from "../shared/base.js";
import app from "../shared/app.js";

var isMobile = app.env.isMobile;

export default class ProjectDetail extends BaseClass {
	constructor($container) {
		super({
			tagName: "div",
			container: $container
		});
		this.ready = true;
	}
	render() {
		this.$html.attr({
			class: "project-detail"
		}).html(`<div class="detail">
					<div class="detail-top">
						<i class="fa fa-times btn-close"></i>
						<a class="fa fa-github btn-github" target="_blank"></a>
						<hr />
					</div>
					<div class="detail-body">
						<div class="content-box"></div>
					</div>
				</div>`);

		this.$contentBox = $(".content-box", this.$html);
		this.$github = $(".btn-github", this.$html);
		this.$detailBody = $(".detail-body", this.$html);
		return this;
	}
	wiredEvent() {
		if (!isMobile) this.$detailBody.perfectScrollbar(app.config.psOption);

		this.on(".btn-close click", () => {
			this.ready = false;
			this.$html.removeClass("active");
			location.hash = "#projects";
			setTimeout(() => {
				this.$html.css("top", 0);
				app.channel.triggerHandler("view:toggleScroll", ["projects", true]);
				this.ready = true;
			}, 500);
		});

		return this;
	}
	addContent(model) {
		this.$contentBox.html(model.info);
		this.$github.attr("href", model.github)
			.css("visibility", model.github ? "visible" : "hidden");

		this.$detailBody.scrollTop(0);
		if (!isMobile) this.$detailBody.perfectScrollbar("update");
		app.channel.triggerHandler("view:toggleScroll", ["projects", false]);

		this.$html.css({
			top: this.$container.scrollTop()
		}).addClass("active");
		return this;
	}
}