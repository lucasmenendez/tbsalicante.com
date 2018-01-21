let PageTeam = Vue.component("page-team-component", {
	template:	`<div class="page-team" v-bind:style="backgroundStyle">
					<h3 class="title">{{ title }}</h3>
					<div class="team">
						<team-profile v-for="profile in profiles" :key="profile.instagram" :profile="profile"></team-profile>
					</div>
				</div>`,
	props: {
		background: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		profiles: {
			type: Array,
			required: true
		},
	},
	data() {
		return {
			backgroundStyle: {
				"background-image": `url(${ this.background })`
			}
		}
	},
	components: {
		"team-profile": PageTeamProfile
	}
})