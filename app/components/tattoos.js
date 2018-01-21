let Tattoos = Vue.component("tattoos-component", {
	template:	`<div id="tattoos">
					<navbar></navbar>
					<page-header :title="header.title" :background="header.background"></page-header>
					<page-text :title="sectionText.title" :paragraphs="sectionText.paragraphs" :picture="sectionText.picture"></page-text>
					<page-team :background="teamwork.background" :title="teamwork.title" :profiles="teamwork.profiles"></page-team>
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
			},
			teamwork: {
				background: "assets/img/tattoo.jpg",
				title: "Tattoo Artists",
				profiles: [
					{
						name: "AdriMax Tattoo",
						picture: "assets/img/adrimax.jpg",
						instagram: "adrimaxtattoo",
						description: "Con el que se inició y compartió este sueño, el carismático, la pólvora. En 2009, su hermano Marcos, que siempre confió en el, le regaló su primera máquina para tatuar y desde entonces se mueve con soltura en todos los estilos, aunque se siente más cómodo en black and grey y realismo, siendo premiado en dos ocasiones por sus trabajo en diferentes convenciones a nivel nacional e internacional."
					},
					{
						name: "Manu Cest",
						picture: "assets/img/manucest.jpg",
						instagram: "manucestink",
						description: "El genio del realismo y de los retratos, la pieza que faltaba. Con formación específica en arte, Manu cuenta con cinco premios, reconociendo su trabajo y otorgados en diferentes convenciones a nivel nacional e internacional."
					},
					{
						name: "Hero Master",
						picture: "assets/img/heromaster.jpg",
						instagram: "heromastertattoo",
						description: "Su pasión por el dibujo le viene desde pequeño, orientando sus estudios a la rama artística, Carlos busca la perfección en cada uno de sus tatuajes. Meticuloso, fino y preciso, nuestro Hero es “old school”, es “color” y es todo corazón."
					},
					{
						name: "Encinas Ink",
						picture: "assets/img/encinasink.jpg",
						instagram: "encinasink",
						description: "El pequeño de la familia empezó jugando con máquinas de tatuar y tinta con sus amigos, convirtiendo un entretenimiento en su trabajo a día de hoy.   "
					},
					{
						name: "DR. Ink",
						picture: "assets/img/drink.jpg",
						instagram: "davidtattooink",
						description: "La cara más amable, el bondadoso, el sentimental. Recién llegado de Liverpool, David se incorpora a nuestra familia con mucho que enseñarnos tras lo aprendido en su aventura por tierras inglesas. "
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