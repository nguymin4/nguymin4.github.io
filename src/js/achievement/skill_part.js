import BaseClass from "../shared/base.js";
import app from "../shared/app.js";

export default class SkillPart extends BaseClass {
	constructor($html, $container) {
		super({
			html: $html,
			container: $container
		});
		this.minHeight = this.$html.outerHeight();
		this.calculateHeight();
	}
	wiredEvent() {
		this.toggleActive = toggleActive.bind(this);
		this.on("h2 click", this.toggleActive);
		
		this.calculateHeight = calculateHeight.bind(this);
		$(window).on("resize", this.calculateHeight);
	}
}

function toggleActive() {
	var maxHeight = this.$html.hasClass("active") ?
		this.minHeight : this.maxHeight;

	this.$html.css("max-height", maxHeight).toggleClass("active");

	app.channel.triggerHandler("view:updateScroll", [this.$container.attr("id")]);
	this.$container.animate({
		scrollTop: this.$html.offset().top - this.minHeight - 10
	}, "slow");
}

function calculateHeight() {
	var currentValue = parseFloat(this.$html.css("max-height").replace("px", ""));
	this.maxHeight = this.$html.css("max-height", "none").outerHeight();

	currentValue = currentValue === this.minHeight ? this.minHeight : this.maxHeight;
	this.$html.css("max-height", currentValue + "px");
}