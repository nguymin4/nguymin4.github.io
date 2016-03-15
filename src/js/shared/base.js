import {analyzeEvent} from "./ulti.js";

export default class BaseClass {
	constructor(specs) {
		// Model
		this.model = specs.model || {};
		
		// View - render if there is tagName
		if (specs.tagName) {
			this.$html = $(`<${specs.tagName}></${specs.tagName}>`);
			this.render();
			this.$container = specs.container.append(this.$html);
		} else {
			this.$html = specs.html;
			this.$container = specs.container;
		}
		
		// Events
		this.events = {};
		if (this.wiredEvent) this.wiredEvent();
	}
	on(event, fn) {
		if (this.events[event]) this.events[event].push(fn);
		else this.events[event] = [fn];

		var args = analyzeEvent(event);
		var $html = args.selector ? $(args.selector, this.$html) : this.$html;
		$html.on(event, fn);
		return this;
	}
	off(event, fn) {
		var listeners = this.events[event];
		var args = analyzeEvent(event);
		var $html = args.selector ? $(args.selector, $html) : this.$html;

		if (fn) $html.off(event, fn);
		else listeners.forEach(fn => $html.off(event, fn));

		return this;
	}
	destroy() {
		for (var event in this.events) this.off(event);
		this.$html.remove();
	}
	toggleClass(className) {
		this.$html.toggleClass(className);
		return this;
	}
}