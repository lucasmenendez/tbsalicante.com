let PageHeader = Vue.component("page-header-component", {
	template:	`<section class="page-header" v-bind:style="backgroundStyle">
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
	},
	data() {
		return {
			backgroundStyle: {
				"background-image": `url(${ this.background })`
			}
		}
	}
});