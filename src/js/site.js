"use strict";
import router from "./view/router.js";
import renderViewIndicator from "./view/view_indicator.js";
import renderSmokeEffect from "./components/smoke.js";

// Contents in each section
import renderInterestSection from "./components/interest_card.js";
import renderProjectSection from "./components/project.js";


var ready = false;
var mediator = {};

var documentLoaded = setInterval(function () {
	if (/loaded|complete/.test(document.readyState) && ready) {
		clearInterval(documentLoaded);
		initWhenReady();
		document.body.className = "loaded";
	}
}, 100);

(function() {
	var _router = router(mediator).preloadViews(() => ready = true);
	mediator.router = _router;
	renderSmokeEffect();
	renderViewIndicator(_router);
})();

function initWhenReady() {
	renderInterestSection();
	renderProjectSection(mediator.router);
}