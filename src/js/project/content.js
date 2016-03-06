let eulerImg = "https://upload.wikimedia.org/wikipedia/commons/8/85/Leonhard_Euler_by_Darbes.jpg";
let githubRoot = "https://github.com/nguymin4";

export default[
	{
		title: "Personal website",
		thumbnail: "assets/img/personal_website.jpg",
		info: `<p><img align="right" src="assets/img/personal_website.jpg"  alt =" " width="300" />
		This is project is my personal website (this website). Source code available on github.
		About the front-end technologies I used:
		<ul>
			<li> HTML5
			<li> CSS3 (SCSS)
			<li> Javascript (ES6) packaged by webpack and transpiled by babel
		</ul>`
	},
	{
		title: "Project Euler - Python",
		thumbnail: eulerImg,
		info: `<p><img align="right" src="${eulerImg}"  alt =" " width="200" />
		Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve.\
		Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems.\
		The motivation for starting Project Euler, and its continuation, is to provide a platform for the inquiring mind to delve into unfamiliar areas and learn new concepts in a fun and recreational context. (https://projecteuler.net/)
		</p>
		<p>I solved the problems with Python as programming language.</p>
		`
	},
	{
		title: "Lanban - Kanban web application",
		thumbnail: "assets/img/lanban_board.jpg",
		info: `<h3>Kanban board web application for Lahti University of Applied Sciences (LAMK)</h3>
<p>This web application development is a visual management tool which was developed as OSS and dedicated to LAMK. It can be used to control the flow of teamwork. 
With the help of this tool, team is able to see who is working for which task, thus enable better visual communication over team’s overall work in a time box. Further the tool would be enabling better visibility to see how the work is progressing over time and illustrating received business value that is created in a project.</p></br>
<p><strong>Value of the application:</strong> LAMK project teams can utilize agile methodology with lean approach. Electronic Kanban board
would bring visibility to not only current work and team level but also to individual level: who is doing
what and how much “points” have been earned within a sprint. Team leaders or “scrum masters”
could see directly how efficiently the team is working and where to find the obstacles or barriers for
working. The board also works as basis for every day standup meeting content (Show-and-tell)</p>
<img class="img-responsive" src="https://github.com/nguymin4/Lanban/raw/master/Lanban/images/Chart-Demo.png"  alt=" " width="500" />
<br />
<img class="img-responsive" src="https://github.com/nguymin4/Lanban/raw/master/Lanban/images/Comment-Demo.png"  alt=" " width="500" />
<br />
<img class="img-responsive" src="https://github.com/nguymin4/Lanban/raw/master/Lanban/images/project.png"  alt=" " width="500" />
`
	},
	{
		title: "BookStore",
		thumbnail: "https://raw.githubusercontent.com/nguymin4/aspnet-bookstore/master/docs/img/ss1.jpg",
		info: `<h3>Book Store</h3>
		<img src="https://github.com/nguymin4/aspnet-bookstore/raw/master/docs/img/ss3.jpg" alt=" " height="375" />
		`
	}
];