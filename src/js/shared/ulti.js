export function analyzeEvent(event) {
	var args = event.split(" ");
	var ev = args.splice(args.length - 1)[0];
	var selector = args.join(" ");
	return {
		selector: selector,
		ev: ev
	}
}


Math.easeOutCubic = function (a, b, c, d) {
	    return c * (Math.pow(a / d - 1, 3) + 1) + b;
}

export function animate(specs) {
	var id;
	var currentIteration = 0;
	var nextValue;

	function draw() {
		id = requestAnimationFrame(draw);
		nextValue = Math.easeOutCubic(currentIteration, specs.start, specs.end, 0.3 * specs.duration);
		currentIteration += 1
		if (nextValue <= specs.end) specs.render(nextValue);
		else cancelAnimationFrame(id);
	}
	
	draw();
}