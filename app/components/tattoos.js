let Tattoos = Vue.component("tattoos-component", {
	template:	`<div id="tatoos">
					<navbar></navbar>
					<page-header title="{{ header.title }}" background="{{ header.background }}"></page-header>
					<page-text title="{{ sectionText.title }}" paragraps="{{ sectionText.paragraphs }}" picture="{{ sectionText.picture }}"></page-text>
				</div>`,
	data() {
		return {
			header: {
				title: "Tattoo Studio",
				background: "assets/img/tattoo-landscape.jpg"
			},
			sectionText: {
				title: "Lorem ipsum dolor sit amet",
				paragraphs: [
					"Maecenas ut tortor magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas efficitur nibh eget nisl scelerisque, rhoncus volutpat elit mollis. Nam ultrices maximus enim, quis egestas leo. Phasellus blandit sed risus id condimentum. Quisque id lectus nec justo faucibus rhoncus. Donec imperdiet sit amet est in pulvinar.",
					"Maecenas ut tortor magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas efficitur nibh eget nisl scelerisque, rhoncus volutpat elit mollis. Nam ultrices maximus enim, quis egestas leo. Phasellus blandit sed risus id condimentum. Quisque id lectus nec justo faucibus rhoncus. Donec imperdiet sit amet est in pulvinar."
				],
				picture: "assets/img/tattoo-portrait.jpg"
			}
		}
	},
	components: {
		"page-header": PageHeader,
		"page-text": PageText
	}
});