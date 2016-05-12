/* global MobileDetect */
import config from "./config.js";
import Channel from "./channel.js";

var app = {
	env: {
		isMobile: (function () {
			let md = new MobileDetect(window.navigator.userAgent);
			return md.mobile() !== null;
		})()
	},
	config: config,
	router: {},
	channel: new Channel()
};

export default app;