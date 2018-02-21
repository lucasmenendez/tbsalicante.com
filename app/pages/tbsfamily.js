let TBSFamily = Vue.component("tbsfamily-page", {
	template:	`<div id="tbsfamily">
					<navbar></navbar>
					<page-header :title="header.title" :background="header.background"></page-header>
					<page-history :title="sectionHistory.title" :description="sectionHistory.description" :sections="sectionHistory.sections"></page-history>
				</div>`,
	data() {
		return {
			header: {
				title: "TBS Family",
				background: "assets/img/tbsfamily-landscape.jpg"
			},
			sectionHistory: {
				title: "Nada como cumplir sueños en familia...",
				description: "Nuestra historia surge de la magia de un sueño, un sueño compartido con un amigo de la infancia que, con mucha ilusión, poco a poco se fue haciendo realidad.",
				sections: [
					{
						picture: "assets/img/tbsfamily-section1.jpg",
						content: "Estos dos amigos, Kiko y Adrián, ya trabajaron juntos hacía muchos años entre brochas y botes de pintura, pero les faltaba pasión por lo que hacían y volcaron sus esfuerzos en encontrar aquello que les llenara. De esta forma, ambos emprendieron caminos por separado, haciendo lo que les gustaba."
					},
					{
						picture: "assets/img/tbsfamily-section2.jpg",
						content: "En nuestro sueño, se fusionaban ambas pasiones, la barbería y el tatuaje. Pero no queríamos que una fuera independiente de la otra, sino que ambas funcionaran al mismo tiempo y en el mismo espacio. Fue la fusión de dos mundos tan distintos, lo que conformó nuestra familia TBS."
					},
					{
						picture: "assets/img/tbsfamily-section3.jpg",
						content: "Esta familia fue aumentando, contando con un miembro más en la recreación de este sueño, Manu Cest, así como un equipo de barberos y tatuadores llenos de ilusión y ganas de formar parte de este proyecto."
					},
					{
						picture: "assets/img/tbsfamily-section4.jpg",
						content: "TBS Alicante conforma un espacio donde poder encontrarse con amigos mientras tomas un café, un ambiente de confianza y familiar, en el que poder relajarte en nuestros sillones clásicos de barbero o por el contrario, si eres de los más atrevidos, aventurarte con un tatuaje de la mano de nuestros experimentados tatuadores."
					}
				]
			}
		}
	},
	components: {
		"navbar": Navbar,
		"page-header": PageHeader,
		"page-history": PageHistory
	}
});