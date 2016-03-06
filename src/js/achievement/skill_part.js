import BaseClass from "../shared/base.js";
import {animate} from "../shared/ulti.js";
import app from "../shared/app.js";

var isMobile = app.env.isMobile;

export default class SkillPart extends BaseClass {
	constructor($html, $container) {
		super({
			html: $html,
			container: $container,
		});
		this.minHeight = this.$html.outerHeight();
		this.calculateHeight();
	}
	wiredEvent() {
		$(window).on("resize", this.calculateHeight.bind(this));

		this.on("h2 click", this.toggleActive.bind(this));
	}
	toggleActive() {
		var maxHeight = this.$html.hasClass("active") ?
			this.minHeight : this.maxHeight

		this.$html.css("max-height", maxHeight).toggleClass("active");
		
		app.channel.trigger("view:updateScroll", [this.$container.attr("id")]);
		this.$container.animate({
			scrollTop: this.$html.offset().top - this.minHeight - 10
		}, "slow");
	}

	calculateHeight() {
		var currentValue = parseFloat(this.$html.css("max-height"));
		this.maxHeight = this.$html.css("max-height", "initial").outerHeight();

		currentValue = currentValue === this.minHeight ? this.minHeight : this.maxHeight;
		this.$html.css("max-height", currentValue);
	}
	
	// Demo request animation
	changeHeight() {
		var initialHeight = this.$html.outerHeight();
		this.targetHeight = this.$html.css("max-height", "initial").outerHeight();
		this.$html.outerHeight(initialHeight)
			.toggleClass("transition");

		animate({
			render: nextValue => this.$html.outerHeight(nextValue),
			start: initialHeight,
			end: this.targetHeight,
			duration: 400
		});
	}
}

