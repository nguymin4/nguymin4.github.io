module.exports = {
	// Meta tags
	"title": "Minh Son Nguyen",

	"description": "Website of Minh Son Nguyen - software developer working in Helsinki, Finland",

	"keyword": "Minh Son Nguyen, nguymin4, software engineer, full-stack developer, biography, projects, portfolio, interests",

	"content-security-policy": {
		"dev": "default-src * 'unsafe-inline' 'unsafe-eval'; img-src * data:",
		"build": [
			"default-src 'self'",
			"script-src 'self' cdnjs.cloudflare.com *.google-analytics.com *.googletagmanager.com 'unsafe-inline'",
			"style-src 'self' cdnjs.cloudflare.com fonts.googleapis.com 'unsafe-inline'",
			"font-src *",
			"img-src * data:"
		].join("; ")
	},

	// Google Analytics
	"google-analytics": {
		"dev": "",
		"build": `
			<!-- Global site tag (gtag.js) - Google Analytics -->
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-75020460-1"></script>
			<script>
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());

			  gtag('config', 'UA-75020460-1');
			</script>`
	},

	// Assets
	"site.js": new FilePath("assets/js/site.js"),
	"site.css": new FilePath("assets/css/site.css"),
	"bootstrap.css": {
		dev: "node_modules/bootstrap/dist/css/bootstrap.css",
		build: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
	},
	"font-awesome.css": {
		dev: "node_modules/font-awesome/css/font-awesome.css",
		build: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	},
	"perfect-scrollbar.css": {
		dev: "node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.css",
		build: "https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.8.1/css/perfect-scrollbar.min.css"
	}
};


/**
 * Creates a object generate links to file used in development and production.
 * @constructor
 * @param {string} path path to file
 */
function FilePath(path) {
	this.dev = path;
	var index = path.lastIndexOf(".");
	this.build = path.substring(0, index) + ".min" + path.substring(index);
}