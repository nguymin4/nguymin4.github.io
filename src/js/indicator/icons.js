import app from "../shared/app.js";

var indicators = [
	{ icon: "fa-home", title: "Home" },
	{ icon: "fa-user", title: "About" },
	{ icon: "fa-certificate", title: "Skills" }
].map((indicator, i) => {
	indicator.href = app.config.hashes[i];
	return indicator;
});

export default indicators;