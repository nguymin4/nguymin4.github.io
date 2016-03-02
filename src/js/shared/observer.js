export default class Observer {
	constructor() {
		this.targets = [];
	}
	register(obj) {
		this.targets.push(obj);
		obj.emit = (event, msg) => this.broadcast(event, msg);
	}
	unregister(obj) {
		this.targets.remove(obj);
	}
	broadcast(event, message) {
		this.targets.forEach(target => target.on(event, message));
	}
}