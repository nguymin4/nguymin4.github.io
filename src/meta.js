module.exports = {
	// Meta tags
	"title": "Minh Son Nguyen",

	"description": "The website of Minh Son Nguyen - a programmer and a final year student in Lahti UAS, Finland - presenting his projects, achievements and interests.",

	"keyword": "Minh Son Nguyen, nguymin4, software engineer, full-stack developer, biography, projects, portfolio, interests",

	"content-security-policy": {
		"dev": "default-src * 'unsafe-inline' 'unsafe-eval'",
		"build": [
			"default-src 'self'",
			"script-src 'self' cdnjs.cloudflare.com www.google-analytics.com 'unsafe-inline'",
			"style-src 'self' cdnjs.cloudflare.com fonts.googleapis.com 'unsafe-inline'",
			"font-src *",
			"img-src *"
		].join("; ")
	},
	
	// Google Analytics
	"google-analytics": {
		"dev": "",
		"build": `
			<script type="text/javascript">
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

				ga('create', 'UA-75020460-1', 'auto');
				ga('send', 'pageview');
			</script>`
	},

	// Assets
	"site.js": {
		"dev": "assets/js/site.js",
		"build": "assets/js/site.min.js"
	},
	"site.css": {
		"dev": "assets/css/site.css",
		"build": "assets/css/site.min.css"
	}
};