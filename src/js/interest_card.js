import BaseClass from "./base.js"
var $container;

class Card extends BaseClass {
	constructor(model) {
		super("div", $container);
		this.model = model;
	}
	render() {
		var model = this.model;
		this.$html.attr({
			class: "card col-md-4 col-sm-6"
		}).html(`
			<div class="flipper">
				<div class="front" style="background-color: ${model.bgColor}">
					<div>
						<h4>${model.title}</h4>
						${"<i class='fa fa-circle'></i>&nbsp;".repeat(3) }
					</div>
				</div>
				<div class="back">${model.content}</div>
			</div>`);

		return this;
	}
}

export default function () {
	$container = $("#interests .container .row");
	
	[
		{
			title: "Running and Walking", bgColor: "#FFCC2B",
			content: "In the summer time, I usually run around the park near my home."
		},
		{
			title: "Swimming", bgColor: "#39D0C1",
			content: ""
		},
		{
			title: "World of Tanks", bgColor: "#D50F25",
			content: ""
		}
	].map((card) => new Card(card).render());
}
