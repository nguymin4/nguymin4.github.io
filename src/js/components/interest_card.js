import BaseClass from "../shared/base.js";
var $container;

class Card extends BaseClass {
	constructor(model) {
		super("div", $container, model);
	}
	render() {
		var model = this.model;
		this.$html.attr({
			class: "card col-md-4 col-sm-6"
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

export default function () {
	$container = $("#interests .container .row");

	[
		{
			title: "Instrumental music", background: "assets/img/Moonlight_Waltz.jpg",
			content: `I do like music, especially instrumental music. I love it softness. 
			My favourite artists and composers are Kim Yoon, The daydream, S.E.N.S, Yukie Nishimura, Yuhki Kuramoto, etc. to name a few.`
		},
		{
			title: "Literature", background: "assets/img/galician-literature-day-spain.jpg",
			content: `My childhood filled with classics novel.
			Jules Verne, Victor Hugo, Alexandre Dumas, Hector Malot, Mark Twain, Jack London, Edmondo De Amicis etc. are familiar names to me.`
		},
		{
			title: "Running and Strolling", background: "assets/img/Launeen_perhepuisto.jpg",
			content: `When the weather is not too cold, I usually run around the park (Launeen perhepuisto) near my home.
			Then to cool down, I walk along with leisurely pace to enjoy the weather while listen to music based on my mood.`
		},
		{
			title: "Swimming", background: "https://media.timeout.com/images/122739/617/347/image.jpg",
			content: `I used to swim a lot and even achieved a gold medal back in my home city.
			Since I moved to Finland, I've had few chances to maintain this habit.`
		},
		{
			title: "World of Tanks", background: "assets/img/shot_010.jpg",
			content: `At the moment, I only play one game named World of Tanks and not so frequently either, about once or twice a week.
			This game requires not only personal skills but more importantly, team work and a tactical mindset.`
		}
	].map(model => new Card(model).render());
}
