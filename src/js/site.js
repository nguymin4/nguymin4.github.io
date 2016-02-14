"use strict";
import "./base.js"
import router from "./router.js";
import smokeEffect from "./smoke.js";
import initViewIndicator from "./view_indicator.js";

var documentLoaded = setInterval(function () {
	if (/loaded|complete/.test(document.readyState)) {
		clearInterval(documentLoaded);
		document.body.className = "loaded";
	}
}, 100);

(function init() {
	var mediator = {
		router: router()
	};
	
	smokeEffect();
	initViewIndicator(mediator.router);
})();