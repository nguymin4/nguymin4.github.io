/* global marked */

import BaseClass from "../shared/base.js"
var $container, $detailView;
var markedRenderer = new marked.Renderer();
markedRenderer.heading = (text, level) => `<h${level}>${text}</h${level}>`;

class Project extends BaseClass {
	constructor(model) {
		super("div", $container, model);
	}
	render() {
		var model = this.model;
		this.$html.attr({
			class: "col-lg-4 col-sm-6"
		}).html(`
			<div class="project">
				<div class="title">${model.title}</div>
				<div class="text-center">
					<img class="img-responsive img-rounded" src="${model.thumbnail}" alt=" " height="240" />
				</div>
				<div class="info">${model.info}</div>
			</div>`);

		return this;
	}
}

export default function () {
	$container = $("#projects .container .row");
	$detailView = $(".project-detail", $container);
	[
		{
			title: "Project Euler - Python",
			thumbnail: "https://upload.wikimedia.org/wikipedia/commons/8/85/Leonhard_Euler_by_Darbes.jpg",
			info: `Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical
					insights to solve. Although mathematics will help you arrive at elegant and efficient methods, the use of a computer
					and programming skills will be required to solve most problems.The motivation for starting Project Euler, and its continuation,
					is to provide a platform for the inquiring mind to delve into unfamiliar areas and learn new concepts in a fun and recreational
					context." (https://projecteuler.net/)`
		},
		{
			title: "Lanban - Kanban web application",
			thumbnail: "assets/img/lanban_board.jpg",
			info: ``
		},
		{
			title: "BookStore - Flask",
			thumbnail: "https://raw.githubusercontent.com/nguymin4/aspnet-bookstore/master/docs/img/ss1.jpg",
			info: `## Flask`
		}
	].map(model => {
		model.info = marked(model.info, { renderer: markedRenderer });
		return new Project(model).render();
	});
}
