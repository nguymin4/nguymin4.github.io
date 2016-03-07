let eulerImg = "https://upload.wikimedia.org/wikipedia/commons/8/85/Leonhard_Euler_by_Darbes.jpg";
let getGithubLink = repo => `https://github.com/nguymin4/${repo}`;

export default[
	{
		title: "Personal website",
		thumbnail: "assets/img/personal_website.jpg",
		github: getGithubLink("nguymin4.github.io"),
		info: `
<img align="right" src="assets/img/personal_website.jpg"  alt =" " width="300" />
This is project is my personal website (this website). Source code is available on github.

About the front-end technologies, I used:
- HTML5
- CSS3 (SCSS)
- Javascript (ES6) packaged by webpack and transpiled by babel. 
Features used: \`class, import/export, lambda expression, template string\` 
`
	},
	{
		title: "Project Euler - Python",
		thumbnail: eulerImg,
		github: getGithubLink("python-euler-project"),
		info: `
<img align="right" src="${eulerImg}"  alt =" " width="200" />
Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve.\
Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems.\
The motivation for starting Project Euler, and its continuation, is to provide a platform for the inquiring mind to delve into unfamiliar areas and learn new concepts in a fun and recreational context. (https://projecteuler.net/)

I solved the problems with **Python** as programming language.
`
	},
	{
		title: "BookStore",
		thumbnail: "https://raw.githubusercontent.com/nguymin4/aspnet-bookstore/master/docs/img/ss1.jpg",
		github: getGithubLink("aspnet-bookstore"),
		info: `
### Book Store
<img align="right" src="https://github.com/nguymin4/aspnet-bookstore/raw/master/docs/img/ss3.jpg" alt=" " height="375" />
This project helps me  a lot to practice several modern technologies.
<br /><br />

#### Front-end
- AngularJS: Angular way
	- manipulate dom with jquery only in directive
	- communication via service
	- keep controller thin
	- ultilize httpInterceptor for routing host depend on config
	- folder structure based on module functionality instead of of module type

  => reuse 98%-99% javascript code when developing hybrid app with cordova

- CSS3 (SCSS): Responsive design and ultilze GPU processing to make transition and animation smoothly in mobile.

	=> reuse 100% css for hybrid app
<br /><br />

#### Back-end
- ASP.NET 5
	- Restful API support both web app and hybrid app
	- dependency injection to make code loosely couple
- MongoDB with its C# driver. Use convention pack to convert CamelCase property between C# code convention and MongoDB convention
- Deploy to Heroku with custom .NET buildpack 
<br /><br />

#### What's next
- Redis
- Google/Facebook authentication
`
	},
	{
		title: "Lanban - Kanban web application",
		thumbnail: "assets/img/lanban_board.jpg",
		github: getGithubLink("Lanban"),
		info: `
### Kanban board web application for Lahti University of Applied Sciences (LAMK)</h3>
This web application development is a visual management tool which was developed as OSS and dedicated to LAMK. It can be used to control the flow of teamwork.
With the help of this tool, team is able to see who is working for which task, thus enable better visual communication over team’s overall work in a time box.
Further the tool would be enabling better visibility to see how the work is progressing over time and illustrating received business value that is created in a project.</p></br>

**Value of the application:** LAMK project teams can utilize agile methodology with lean approach. Electronic Kanban board
would bring visibility to not only current work and team level but also to individual level: who is doing
what and how much “points” have been earned within a sprint. Team leaders or “scrum masters”
could see directly how efficiently the team is working and where to find the obstacles or barriers for
working. The board also works as basis for every day standup meeting content (Show-and-tell)

<img class="img-responsive" src="https://github.com/nguymin4/Lanban/raw/master/Lanban/images/Chart-Demo.png"  alt=" " width="500" />

<img class="img-responsive" src="https://github.com/nguymin4/Lanban/raw/master/Lanban/images/Comment-Demo.png"  alt=" " width="500" />
`
	},
];