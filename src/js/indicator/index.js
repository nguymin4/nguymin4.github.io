import app from "../shared/app.js";
import Indicator from "./indicator.js";
import iconList from "./icons.js";

export default function () {
	var $container = $("#view-indicators");	
	var indicators = iconList.map(indicator => new Indicator(indicator, $container))
	
	var active =  app.router.initialViewIndex;
	indicators[active].toggleClass("active");
	
	app.channel.on("viewIndicator:viewIndexChanged", (e, index) => {
		indicators[active].toggleClass("active");
		indicators[index].toggleClass("active");
		active = index;
	});
}
