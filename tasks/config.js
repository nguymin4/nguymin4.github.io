module.exports = {
	"content-security-policy": {
		"dev": "default-src * 'unsafe-inline'",
		"build": [
			"default-src 'self'",
			"style-src 'self' cdnjs.cloudflare.com fonts.googleapis.com",
			"script-src 'self' cdnjs.cloudflare.com 'unsafe-inline'",
			"font-src *",
			"img-src *"
		].join("; ")
	}
}