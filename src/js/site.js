"use strict";
import app from "./shared/app.js";

import Router from "./view/router.js";
import renderViewIndicator from "./indicator/index.js";
import renderSmokeEffect from "./components/smoke.js";

// Contents in each section
import renderInterestSection from "./interest/index.js";
import renderProjectSection from "./project/index.js";
import renderAchievementSection from "./achievement/index.js";
import initSkillPart from "./components/skillPart.js";


var ready = false;

var documentLoaded = setInterval(() => {
	if (/loaded|complete/.test(document.readyState) && ready) {
		clearInterval(documentLoaded);
		checkFallback();
		$(document.body).addClass("loaded");
	}
}, 100);


(function() {
	var router = Router().preloadViews(() => {
		initWhenReady();
		ready = true;
	});
	app.router = router;
	renderSmokeEffect();
	renderViewIndicator();
})();


function initWhenReady() {
	renderInterestSection();
	renderProjectSection();
	renderAchievementSection();
	initSkillPart();
}


function checkFallback() {
	if (!$(".achievement").length) {
		renderAchievementSection();
	}

	var skillPartEvents = $._data($("#skills .row").get(0), "events");
	if (!(skillPartEvents && skillPartEvents.click)) {
		initSkillPart();
	}
}
