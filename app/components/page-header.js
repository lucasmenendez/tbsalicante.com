let PageHeader = Vue.component("page-header-component", {
	template:	`<section class="page-header" v-bind:style="{ backgroundImage: bakground }">
					<h2 class="page-title">{{ title }}</h2>
				</section>`,
	props: {
		title: {
			type: String,
			required: true
		},
		background: {
			type: String,
			required: true
		}
	}
});