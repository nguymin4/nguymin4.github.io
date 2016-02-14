export default class BaseClass {
	constructor() {
		this.events = {};
	}
	
	on(event, fn) {
		if (this.events[event]) this.events[event].append(fn);
		else this.events[event] = [fn];
		this.html.addEventListener(event, fn);
	}
	
	off(event, fn) {
		var html = this.html;
		var listeners = this.events[event];

		if (fn) html.removeEventListener(event, fn)
		else
			listeners.forEach(function (fn) {
				html.removeEventListener(event, fn)
			}, this);
	}
}