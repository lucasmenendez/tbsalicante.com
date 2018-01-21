let PageText = Vue.component("page-text-component", {
	template:	`<section class="page-text">
					<div class="content">
						<h3 class="title">{{ title }}</h3>
						<p v-for="paragraph in paragraphs">{{ paragraph }}</p>
					</div>
					<div class="picture" v-if="picture" v-bind:style="backgroundStyle"></div>
				</section>`,
	props: {
		title: {
			type: String,
			required: true
		},
		paragraphs: {
			type: Array,
			required: true
		},
		picture: String
	},
	data() {
		return {
			backgroundStyle: {
				"background-image": `url(${ this.picture })`
			}
		}
	}
});