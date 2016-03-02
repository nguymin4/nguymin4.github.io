import BaseClass from "../shared/base.js";

export default class Indicator extends BaseClass {
	constructor(model, $container) {
		super("a", $container, model);
	}
	render() {
		var model = this.model;
		this.$html.attr({
			href: model.href,
			title: model.title,
			class: "view-indicator"
		}).html(`<i>${model.title}</i><span></span>`);

		return this;
	}
}
