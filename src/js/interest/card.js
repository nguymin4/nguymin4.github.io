import BaseClass from "../shared/base.js";

export default class Card extends BaseClass {
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
			class: "interest-card col-md-4 col-sm-6"
		}).html(`
				<div class="flipper">
					<div class="front" style="background-image: url(${model.background})">
						<div>
							<h4>${model.title}</h4>
							${"<i class='fa fa-circle'></i>".repeat(3) }
						</div>
					</div>
					<div class="back">${model.content}</div>
				</div>`);
		return this;
	}
}