/* global setFixtures */
import Card from "interest/card.js";

describe("Interests section", function() {
	var $container;
	var cards;
	var models = [{
		title: "Instrumental music",
		background: "assets/img/Moonlight_Waltz.jpg",
		content: `I do like music`
	},{
		title: "Games",
		background: "",
		content: `World of Tanks`
	}];

	beforeAll(() => {
		setFixtures(`
		<div id="interests">
			<div class="container">
				<div class="row"></div>
			</div>
		</div>`);
		$container = $("#interests .container .row");
		cards = models.map(model => new Card(model, $container));
	});
	
	it("should display cards", function() {
		expect($("> div", $container).length).toEqual(2);
	});
	
	describe("and cards", function() {
		var $html;		
		
		beforeAll(() => $html = cards[0].$html);
		
		it("should render correctly", function() {
			expect($html).toHaveClass("interest-card");
			var background = $(".front", $html).css("background");
			expect(background).toContain(models[0].background);
		});

		it("should have correct content", function() {
			var model = models[0];
			expect($("h4", $html)).toHaveHtml(model.title);
			expect($(".back", $html)).toHaveHtml(model.content);
		});
	});
});
