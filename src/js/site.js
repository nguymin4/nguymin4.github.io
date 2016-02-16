"use strict";
import "./base.js"
import router from "./router.js";
import smokeEffect from "./smoke.js";
import initViewIndicator from "./view_indicator.js";

var ready = false;
var documentLoaded = setInterval(function () {
	if (/loaded|complete/.test(document.readyState) && ready) {
		clearInterval(documentLoaded);
		document.body.className = "loaded";
	}
}, 100);

(function init() {
	var mediator = {};
	var _router = router(mediator);
	mediator.router = _router;
	_router.preloadViews(() => ready = true);

	smokeEffect();
	initViewIndicator(_router);
})();