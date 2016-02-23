"use strict";
import "./base.js"
import router from "./router.js";
import renderSmokeEffect from "./smoke.js";
import renderViewIndicator from "./view_indicator.js";
import renderInterestSection from "./interest_card.js";

var ready = false;
var documentLoaded = setInterval(function () {
	if (/loaded|complete/.test(document.readyState) && ready) {
		clearInterval(documentLoaded);
		initWhenReady();
		document.body.className = "loaded";
	}
}, 100);

(function init() {
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