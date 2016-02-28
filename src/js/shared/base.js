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
		this.$html.on(event, fn);
		return this;
	}
	off(event, fn) {
		var html = this.$html;
		var listeners = this.events[event];

		if (fn) html.off(event, fn)
		else
			listeners.forEach(function (fn) {
				html.off(event, fn)
			}, this);
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