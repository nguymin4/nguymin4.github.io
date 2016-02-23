module.exports = {
	"content-security-policy": {
		"dev": "default-src * 'unsafe-inline'",
		"build": [
			"default-src 'self'",
			"script-src 'self' cdnjs.cloudflare.com 'unsafe-inline'",
			"style-src 'self' cdnjs.cloudflare.com fonts.googleapis.com 'unsafe-inline'",
			"font-src *",
			"img-src *"
		].join("; ")
	}
}