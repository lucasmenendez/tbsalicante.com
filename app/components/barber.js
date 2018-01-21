let Barber = Vue.component("barber-component", {
	template:	`<div id="barber">
					<navbar></navbar>
					<page-header :title="header.title" :background="header.background"></page-header>
					<page-text :title="sectionText.title" :paragraphs="sectionText.paragraphs" :picture="sectionText.picture"></page-text>
					<page-team :background="teamwork.background" :title="teamwork.title" :profiles="teamwork.profiles"></page-team>
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
			},
			teamwork: {
				background: "assets/img/barber.jpg",
				title: "Barbers",
				profiles: [
					{
						name: "Mr. Kiko. Master Barber",
						picture: "assets/img/kiko.jpg",
						instagram: "kiko_ja_barber",
						description: "El que tuvo el sueño, el que lucha, el sencillo, el perfeccionista, el humilde, el humano, el maestro. Desde 2009, hace de algo que empezó como un hobby su pasión, siendo el corte clásico con tijera y navaja su especialidad."
					},
					{
						name: "Wino Barber",
						picture: "assets/img/wino.jpg",
						instagram: "winobarber",
						description: "Por gente como él dentro del gremio de la barbería se puede hablar de arte: los degradados y los hair tattoo no se le resisten. Además, si quieres pasar un buen rato, él es tu barbero."
					}
				]
			}
		}
	},
	components: {
		"navbar": Navbar,
		"page-header": PageHeader,
		"page-text": PageText,
		"page-team": PageTeam
	}
});