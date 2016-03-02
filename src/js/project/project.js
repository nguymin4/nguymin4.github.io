import BaseClass from "../shared/base.js";
import DetailView from "./project_detail.js";

var detailView;

export default class Project extends BaseClass {
	constructor(model, $container) {
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
	wiredEvent() {
		this.on(".project click", () => {
			detailView.addContent(this.model.info);
		});
	}
	static setDetailView() {
		detailView = new DetailView($("#projects"));
	}
}