let PageHistory = Vue.component("page-history-components", {
	template:   `<div class="history">
					<div class="history-header">
						<h3 class="title">{{ title }}</h3>
						<p v-if="description" class="description">{{ description }}</p>
					</div>
					<div class="history-sections">
						<div class="history-section" v-for="section in sections" v-bind:style="bindBackground(section.picture)">
							<div class="section-content">
								<p>{{ section.content }}</p>	
							</div>					
						</div>
					</div>
				</div>`,
	props: {
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: false
		},
		sections: {
			type: Array,
			required: true
		}
	},
	methods: {
		bindBackground(picture) {
			return {
				"background-image": `url(${ picture })`
			}
		}
	}
});