"use strict";
import router from "./view/router.js";
import renderViewIndicator from "./view/view_indicator.js";
import renderSmokeEffect from "./components/smoke.js";
import renderInterestSection from "./components/interest_card.js";

var ready = false;
var documentLoaded = setInterval(function () {
	if (/loaded|complete/.test(document.readyState) && ready) {
		clearInterval(documentLoaded);
		initWhenReady();
		document.body.className = "loaded";
	}
}, 100);

(function() {
	var mediator = {};
	var _router = router(mediator);
	mediator.router = _router;
	_router.preloadViews(() => ready = true);
	
	renderSmokeEffect();
	renderViewIndicator(_router);
})();

function initWhenReady() {
	renderInterestSection();
}