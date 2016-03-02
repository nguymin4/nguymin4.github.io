/* global MobileDetect */
import * as config from "./config.js";

var app = {
	env: {
		isMobile: (function () {
			let md = new MobileDetect(window.navigator.userAgent);
			return md.mobile() !== null;
		})()
	},
	config: config,
	router: {},
	channel: $({})
};

export default app;