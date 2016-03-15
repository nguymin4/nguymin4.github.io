import BaseClass from "../shared/base.js";

export default class Achievement extends BaseClass {
	constructor(model, $container) {
		super({
			tagName: "div",
			container: $container,
			model: model
		});
	}
	render() {
		var model = this.model;
		this.$html.attr({
			class: "achievement"
		}).html(`
			<div class="logo">
				<img src="${model.logo}" alt="${model.authority}" 
					title="${model.authority}" />
			</div>
			<div class="text">
				<div class="name">${model.name}</div>
				<a href="${model.url}" target="_blank">Link</a>
			</div>
		`);
		return this;
	}
}