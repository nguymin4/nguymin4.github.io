function Observer (mediator) {
	var observer = {
		targets: [],
		register: (obj) => {
			var self = observer;
			self.targets.push(obj);
			obj.emit = (event, msg) => self.broadcast(event, msg);
		},
		unregister: (obj) => this.targets.remove(obj),
		broadcast: function (event, message) {
			var self = observer;
			for (var i = 0; i < self.targets.length; i++) {
				self.targets[i].on(event, message);
			}
		}
	}
	
	mediator.observer = observer;
}