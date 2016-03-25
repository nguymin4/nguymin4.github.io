function parallel(deferreds) {
	var self = {};
	var callbacks = [];
	deferreds = deferreds.length ? deferreds : [deferreds];
	var count = deferreds.length;

	self.then = cb => {
		if (typeof cb === "function")
			callbacks.push(cb);
		return self;
	};

	deferreds.forEach(d => d.then(check));
	function check() {
		count -= 1;
		if (count === 0) {
			var result = [];
			callbacks.forEach(cb => result = cb.call(this, result));
		}
	}

	return self;
}

function waterfall(tasks) {
	var self = {};
	var callbacks = [];
	tasks = tasks.length ? tasks : [tasks];

	self.then = cb => {
		if (typeof cb === "function")
			callbacks.push(cb);
		return self;
	};

	var task;
	executeSequence();

	function executeSequence() {
		if (tasks.length === 0) {
			task.then(executeCallback);
		}
		else {
			task = tasks.shift().apply(this, arguments);
			task.then(executeSequence.bind(arguments));
		}
	}
	
	function executeCallback() {
		var args = Array.prototype.slice.apply(arguments);
		var result;
		callbacks.forEach(cb => {
			if (result) args = [result].concat(args);
			result = cb.apply(this, args);
		});
	}

	return self;
}

module.exports = {
	parallel: parallel,
	waterfall: waterfall
};