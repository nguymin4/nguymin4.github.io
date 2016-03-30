"use strict";

export default class Channel {
	constructor() {
		this.events = {};
	}
	triggerHandler(event, args) {
		args = [event].concat(args);
		this.events[event].forEach(fn => fn.apply(null, args));
		return this;	
	}
	on(event, fn) {
		if (this.events[event]) this.events[event].push(fn);
		else this.events[event] = [fn];
		return this;
	}
}