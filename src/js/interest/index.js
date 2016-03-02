import Card from "./card.js";
import interestList from "./content.js";

export default function () {
	var $container = $("#interests .container .row");
	interestList.map(model => new Card(model, $container));
}