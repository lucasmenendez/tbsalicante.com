let Barber = Vue.component("barber-component", {
	template:	`<div id="barber">
					<navbar></navbar>
					<page-header :title="header.title" :background="header.background"></page-header>
					<page-text :title="sectionText.title" :paragraphs="sectionText.paragraphs" :picture="sectionText.picture"></page-text>
				</div>`,
	data() {
		return {
			header: {
				title: "Barber Shop",
				background: "assets/img/barber-landscape.jpg"
			},
			sectionText: {
				title: "Algo más que una simple barbería",
				paragraphs: [
					"Nuestro concepto, un estilo de vida.",
					"La naturalidad de nuestros barberos se entremezcla con un entorno que se adentra en los años 50 y 60, en una barbería de estilo vintage e industrial con toques modernos.",
					"Nos gusta lo que hacemos y nuestra mejor experiencia es poder compartirla contigo.",
					"Queremos que nuestros clientes se sientan como en casa, donde puedan escuchar la música que les gusta (“no te cortes” en cambiarla), tomar un café… todo ello mientras se dejan cuidar y asesorar por las manos expertas de nuestros barberos."
				],
				picture: "assets/img/barber-portrait.jpg"
			}
		}
	},
	components: {
		"navbar": Navbar,
		"page-header": PageHeader,
		"page-text": PageText
	}
});