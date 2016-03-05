module.exports = {
	// Meta tags
	"title": "Minh Son Nguyen",
	
	"description": "The website of Minh Son Nguyen - a programmer and a final year student in Lahti UAS, Finland - presenting his projects, achievements and interests.",
	
	"keyword": "Minh Son Nguyen, nguymin4, software engineer, full-stack developer, biography, projects, portfolio, interests",
	
	"content-security-policy": {
		"dev": "default-src * 'unsafe-inline'",
		"build": [
			"default-src 'self'",
			"script-src 'self' cdnjs.cloudflare.com 'unsafe-inline'",
			"style-src 'self' cdnjs.cloudflare.com fonts.googleapis.com 'unsafe-inline'",
			"font-src *",
			"img-src *"
		].join("; ")
	},
	
	// Assets
	"site.js" : {
		"dev": "assets/js/site.js",
		"build": "assets/js/site.min.js"
	},
	"site.css" : {
		"dev": "assets/css/site.css",
		"build": "assets/css/site.min.css"
	}
}