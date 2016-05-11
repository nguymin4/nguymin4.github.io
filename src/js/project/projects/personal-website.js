export default {
	id: "nguymin4.github.io",
	title: "Personal website",
	thumbnail: "assets/img/personal_website.jpg",
	onGitHub: true,
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

	One issue emerged from pure selenium-webdriver is "callback of hell". To prevent this, I create a module named \`async.js\` with two function \`parallel\` and \`waterfall\`.
Those functions help me to flatten the e2e tests.
 
	I also added a \`gulp\` task to run the test against multi-browsers which is config in config file.
The gulp task accept parameters \`--parallel\` which run parallel tests using *Selenium Grid*.    

	Other prerequisites components to run the test are \`selenium-standalone-server*.jar\`, \`chromedriver(exe)\`, 
\`phantomjs\` (installed via package phantomjs-prebuilt), firefox is supported by selenium out of the box.
Setting up webdriver either in \`PATH\`, in config file or download and place it in \`bin\` folder inside \`lib/selenium-jasmine\`  

	Limitation: Work stable on Linux. On Windows, there are performance issues and errors with firefox and phantomjs. Those issues are addressed on 
https://github.com/seleniumhq/selenium-google-code-issue-archive/issues
`
};