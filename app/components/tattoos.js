let Tattoos = Vue.component("tattoos-component", {
	template:	`<div id="tattoos">
					<navbar></navbar>
					<page-header :title="header.title" :background="header.background"></page-header>
					<page-text :title="sectionText.title" :paragraphs="sectionText.paragraphs" :picture="sectionText.picture"></page-text>
				</div>`,
	data() {
		return {
			header: {
				title: "Tattoo Studio",
				background: "assets/img/tattoo-landscape.jpg"
			},
			sectionText: {
				title: "El arte de lo imborrable",
				paragraphs: [
					"El mundo del tatuaje es la forma de representación artística más expresiva que puede existir para un artista, puesto que su obra permanece inalterable de por vida.",
					"En nuestro estudio, no sólo encontrarás tatuadores experimentados y cualificados, con la ilusión del primer día, sino un espacio único y diferente, acorde a nuestra forma de trabajar y de desarrollar nuestra actividad artística."
				],
				picture: "assets/img/tattoo-portrait.jpg"
			}
		}
	},
	components: {
		"navbar": Navbar,
		"page-header": PageHeader,
		"page-text": PageText
	}
});