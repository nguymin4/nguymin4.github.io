export default {
	title: "Personal website",
	thumbnail: "assets/img/personal_website.jpg",
	github: "nguymin4.github.io",
	info: `
<img align="right" src="assets/img/personal_website.jpg"  alt =" " width="300" />
This is project is my personal website (this website). Source code is available on github.

About the front-end technologies, I used:
- HTML5
- CSS3 (SCSS) and Twitter bootstrap
- Javascript (ES6) packaged by webpack and transpiled by babel.  
	- Main features used: \`class, import/export, lambda expression, template string\`  
	- Framework: No 3rd-party framework, self-organized code based on class and module.  

Testing:
- Unit testing: Jasmine, Karma, PhantomJS
- E2E testing: To carry out the test, I created a custom nodejs module dependent on \`selenium-webdriver\` for browser automation and \`jasmine\` as framework. 
I also added a \`gulp\` task to run the test against multi-browsers which is config in config file.  

	Other prerequisites components to run the test are \`selenium-standalone-server*.jar\`, \`chromedriver(exe)\`, 
\`phantomjs\` (installed via package phantomjs-prebuilt), firefox is supported by selenium out of the box.
`
};