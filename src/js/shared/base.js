function analyzeEvent(event) {
	var args = event.split(" ");
	var ev = args.splice(args.length - 1)[0];
	var selector = args.join(" ");
	return {
		selector: selector,
		ev: ev
	}
}

export default class BaseClass {
	constructor(tagName, $container, model) {
		this.events = {};
		this.$html = $(`<${tagName}></${tagName}>`);
		$container.append(this.$html);
		this.model = model;
	}
	on(event, fn) {
		if (this.events[event]) this.events[event].append(fn);
		else this.events[event] = [fn];

		var args = analyzeEvent(event);
		if (args.selector) $(args.selector, this.$html).on(args.ev, fn);
		else this.$html.on(event, fn);
		return this;
	}
	off(event, fn) {
		var listeners = this.events[event];
		var args = analyzeEvent(event);
		var $html = args.selector ? $(args.selector, $html) : this.$html;

		if (fn) $html.off(event, fn)
		else listeners.forEach(fn => $html.off(event, fn));

		return this;
	}
	destroy() {
		var self = this;
		for (var event in self.events) self.off(event);
		self.$html.remove();
	}
	toggleClass(className) {
		this.$html.toggleClass(className);
		return this;
	}
}