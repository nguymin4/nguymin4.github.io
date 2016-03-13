export default {
	title: "BookStore",
	thumbnail: "https://raw.githubusercontent.com/nguymin4/aspnet-bookstore/master/docs/img/ss1.jpg",
	github: "aspnet-bookstore",
	info: `
### Book Store
<img align="right" src="https://github.com/nguymin4/aspnet-bookstore/raw/master/docs/img/ss3.jpg" alt=" " height="375" />
<br />
#### Front-end
- AngularJS: Angular way
	- manipulate dom with jquery only in directive
	- communication via service
	- keep controller thin and avoid scope with *controllerAs* syntax
	- ultilize httpInterceptor for routing host depend on config
	- folder structure based on module functionality instead of of module type

  <i class="fa fa-arrow-right"></i> reuse 98% - 99% javascript code when developing hybrid app with cordova

- CSS3 (SCSS): Responsive design and ultilze GPU processing to make transition and animation smoothly in mobile.

  <i class="fa fa-arrow-right"></i> reuse 100% css for hybrid app  

- Testing: 
	- Unit testing: Jasmine, Karma, PhantomJS
	- E2E testing: Protractor, Jasmine as framework, browsers Chrome (PhantomJS is not stable for protractor) 
<br /><br />

#### Back-end
- ASP.NET 5
	- Restful API support both web app and hybrid app
	- DI to make code loosely couple
- MongoDB with its C# driver. Use convention pack to convert CamelCase property between C# code convention and MongoDB convention
- Deploy to Heroku with custom .NET buildpack
<br /><br />

After this project, I used Python (Flask) instead of ASP.NET in the back-end while still keep the front-end. It's also deployed to Heroku. 
https://github.com/nguymin4/flask-bookstore
<br /><br />

#### What's next
- Redis
- Google/Facebook authentication
`
};