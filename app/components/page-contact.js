let PageContact = Vue.component("page-conframetact-component", {
	template:	`<div class="page-contact">
					<div class="show-form" v-if="hidden" v-on:click="hidden = !hidden">Volver →</div>
					<div class="contact-frame"  v-bind:class="{ hidden: hidden }">
						<div class="contact-container">
							<h2>The Studio</h2>
							
							<div class="info">
								<h4>Ven a vernos</h4>
								<div class="info-block">	
									<label>Teléfono</label>
									<p>{{ phone }}</p>
								</div>
								<div class="info-block">
									<label>Dirección</label>
									<p>{{ address }}</p>
								</div>
								
								<div class="showmap" v-on:click="hidden = !hidden">
									<img src="/assets/img/showcase.jpg">
									<span>
										<img src="/assets/icons/map.svg">
										Ver mapa
									</span>
								</div>
							</div>
							
							<div class="form">
								<h4>Habla con nosotros</h4>
								<form name="contact" netlify netlify-honeypot="bot-field">
									<input placeholder="Nombre y apellidos" type="text" name="name">
									<input placeholder="Asunto" type="text" name="subject">
									<input placeholder="Correo electrónico" type="email" name="email">
									<textarea placeholder="Mensaje" name="content"></textarea>
									
									<button type="submit" v-on:click="send">Enviar</button>
								</form>									
							</div>
						</div>
					</div>
				</div>`,
	props: {
		address: {
			type: String,
			required: true
		},
		phone: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			hidden: false,
			form: {
				name: "",
				subject: "",
				email: "",
				content: ""
			}
		}
	}
});