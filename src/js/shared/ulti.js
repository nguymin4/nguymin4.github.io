export function analyzeEvent(event) {
	var args = event.split(" ");
	var ev = args.splice(args.length - 1)[0];
	var selector = args.join(" ");
	return {
		selector: selector,
		ev: ev
	}
}