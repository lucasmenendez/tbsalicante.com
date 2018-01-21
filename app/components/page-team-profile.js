let PageTeamProfile = Vue.component("page-team-profile", {
	template:	`<div class="team-profile">
					<img class="profile-picture" :src="profile.picture"/>
					<div class="profile-body">
						<div class="profile-header">
							<h4 class="profile-name">{{ profile.name }}</h4>
							<a class="profile-instagram" v-bind:href="'https://www.instagram.com/' + profile.instagram" target="_blank">
								@{{ profile.instagram }} on Instragram
							</a>
						</div>
						<p class="profile-text">{{ profile.description }}</p>
					</div>
				</div>`,
	props: {
		profile: Object,
		required: true
	}
})