let TheStudio = Vue.component("thestudio-page", {
	template:	`<div id="studio">
					<navbar></navbar>
					<iframe src="https://snazzymaps.com/embed/50131" width="100%" height="100%" style="border:none;"></iframe>
					<page-contact :address="contact.address" :phone="contact.phone"></page-contact>
				</div>`,
	data() {
		return {
			header: {
				title: "The Studio",
				background: "assets/img/showcase.jpg"
			},
			contact: {
				address: "C/Pintor Aparicio, 3, 03003 Aliacante",
				phone: "966 081 018"
			}
		}
	},
	components: {
		"navbar": Navbar,
		"page-contact": PageContact
	},
	methods: {
		clicked() {console.log("EH")}
	}
});