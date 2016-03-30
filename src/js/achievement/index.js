import Achievement from "./achievement.js";
import achievementList from "./content.js";

export default function () {
	var $container = $(".achievement-list");
	achievementList.map(model => new Achievement(model, $container));
}