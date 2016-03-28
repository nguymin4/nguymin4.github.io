import SkillPart from "./skill_part.js";
import Achievement from "./achievement.js";
import achievementList from "./content.js";

export default function () {
	var $container = $(".achievement-list");
	achievementList.map(model => new Achievement(model, $container));
	
	// Skills section include 2 part: Skills and Achievement
	// This function will allow to minimize and maximize each part
	$container = $("#skills");
	$(".row", $container).toArray()
		.map(el => new SkillPart($(el), $container))
		.forEach(part => part.toggleActive());
	$container.stop(true, true).scrollTop(0);
}