## My personal website
This is the source code of my personal website.

Front-end technologies:
- HTML5
- CSS3 (SCSS) and Twitter bootstrap
- Javascript (ES6) packaged by webpack and transpiled by babel.  
	- Features used: `class, import/export, lambda expression, template string`  
	- Framework: No 3rd-party framework, self-organized code based on class and module. 

Testing:
- Unit testing: Jasmine, Karma, PhantomJS
- E2E testing: To carry out the test, I created a custom nodejs module dependent on `selenium-webdriver` for browser automation and `jasmine` as framework.  
 
	I also added a `gulp` task to run the test against multi-browsers which is config in config file.
The gulp task accept parameters `--parallel` which run parallel tests using Selenium Grid.

	Other prerequisites components to run the test are `selenium-standalone-server*.jar`, `chromedriver(exe)`, 
`phantomjs` (installed via package phantomjs-prebuilt), firefox is supported by selenium out of the box.
Set up webdriver either in `PATH`, in config file or download and place it in `bin` folder inside `lib/selenium-jasmine`.  

	Limitation: Work stable on Linux. On Windows, there are performance issues and errors with firefox and phantomjs. Those issues are addressed on 
https://github.com/seleniumhq/selenium-google-code-issue-archive/issues
 
  
  
Author: Minh Son Nguyen  
Website: https://nguymin4.github.io  
E-mail: minh.son.nguyen.1209@gmail.com  