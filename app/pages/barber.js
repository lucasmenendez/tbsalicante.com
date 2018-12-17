let Barber = Vue.component("barber-page", {
	template:	`<div id="barber">
					<navbar></navbar>
					<page-header :title="header.title" :background="header.background"></page-header>
					<page-text :title="sectionText.title" :paragraphs="sectionText.paragraphs" :picture="sectionText.picture"></page-text>
					<page-team :background="teamwork.background" :title="teamwork.title" :profiles="teamwork.profiles"></page-team>
					<page-services :title="services.title" :services="services.services"></page-services>
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
					},
					{
						name: "Torete Barber",
						picture: "assets/img/torete.jpg",
						instagram: "toretebarber",
						description: "Héctor comenzó sus estudios hace un año, seguido de cursos de técnicas y perfeccionamiento de corte masculino. Realizó las prácticas en nuestra barbería donde, por su gran carisma, estilo de trabajo y su afán de superación, consiguió hacerse un hueco entre nosotros"
					}
				]
			},
			services: {
				title: "Servicios",
				services: [
					{
						thumbnail: "assets/img/hair-service.jpg",
						icon: "assets/icons/hair-service.svg",
						title: "Cortes",
						description: false,
						extra: false,
						subservices: [
							{
								description: "Corte de pelo",
								price: 12,
								from: false
							},
							{
								description: "Corte de pelo y arreglo de barba",
								price: 18,
								from: false
							},
							{
								description: "Rapado básico",
								price: 8,
								from: false
							},
							{
								description: "Afeitado cabeza a navaja",
								price: 12,
								from: false
							},
							{
								description: "Hair tattoo/dibujo",
								price: 16,
								from: true
							}
						]
					},
					{
						thumbnail: "assets/img/barber-service.jpg",
						icon: "assets/icons/barber-service.svg",
						title: "Barba",
						description: "Disfruta de 40’ de cuidados para un auténtico gentleman y/o barbudo (toalla caliente, enjabonado con brocha, arreglo de barba o afeitado tradicional y delineado de contornos a navaja)",
						extra: false,
						subservices: [
							{
								description: "Arreglo barba",
								price: 8,
								from: false
							},
							{
								description: "Afeitado",
								price: 10,
								from: false
							},
							{
								description: "Ritual afeitado o de barba",
								price: 16,
								from: false
							}
						]
					},
					{
						thumbnail: "assets/img/kids-service.jpg",
						icon: "assets/icons/kids-service.svg",
						title: "Niños",
						description: false,
						extra: false,
						subservices: [
							{
								description: "Corte básico",
								price: 10,
								from: false
							},
							{
								description: "Corte especial",
								price: 12,
								from: false
							}
						]
					}
					,
					{
						thumbnail: "assets/img/weddings-service.jpg",
						icon: "assets/icons/weddings-service.svg",
						title: "Wedding Barber Home",
						description: "Servicio pensado para que el novio también sea protagonista en un día tan importante como el de su boda.",
						extra: "El mismo día de la boda, uno de nuestros barberos se desplazará a casa del novio, para prepararlo para la ocasión. Corte de pelo, arreglo de barba, ritual de afeitado… y acicalamiento usando una variedad de productos de gran calidad.",
						subservices: false
					}
				]
			}
		}
	},
	components: {
		"navbar": Navbar,
		"page-header": PageHeader,
		"page-text": PageText,
		"page-team": PageTeam,
		"page-services": PageServices
	}
});