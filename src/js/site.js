"use strict";
import app from "./shared/app.js";

import Router from "./view/router.js";
import renderViewIndicator from "./indicator/index.js";
import renderSmokeEffect from "./components/smoke.js";

// Contents in each section
import renderInterestSection from "./interest/index.js";
import renderProjectSection from "./project/index.js";
import renderAchievementSection from "./achievement/index.js";


var ready = false;

var documentLoaded = setInterval(() => {
	if (/loaded|complete/.test(document.readyState) && ready) {
		clearInterval(documentLoaded);
		initWhenReady();
		$(document.body).addClass("loaded");
	}
}, 200);

(function() {
	var router = Router().preloadViews(() => ready = true);
	app.router = router;
	renderSmokeEffect();
	renderViewIndicator();
})();

function initWhenReady() {
	renderInterestSection();
	renderProjectSection();
	renderAchievementSection();
}