/* global marked */
import app from "../shared/app.js";
import BaseClass from "../shared/base.js";
import DetailView from "./project_detail.js";

var detailView;

export default class Project extends BaseClass {
	constructor(model, $container) {
		model.info = marked(model.info, {
			renderer: app.config.markedRenderer
		}).replace(/\n/g, "");
		
		super({
			tagName: "a",
			container: $container,
			model: model
		});
	}
	render() {
		var model = this.model;
		this.$html.attr({
			class: "col-lg-4 col-sm-6",
			href: `#projects/detail/${model.id}`
		}).html(`
			<div class="project" title="${model.title}">
				<div class="title">${model.title}</div>
				<div class="text-center">
					<img src="${model.thumbnail}" alt=" " />
				</div>
			</div>`);

		return this;
	}
	openDetailView() {
		if (detailView.ready) detailView.addContent(this.model);
	}
	static setDetailView($container) {
		detailView = new DetailView($container);
	}
}