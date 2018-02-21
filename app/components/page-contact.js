let PageContact = Vue.component("page-conframetact-component", {
	template:	`<div class="page-contact" >
					<div class="show-form" v-if="!show" v-on:click="show = !show">Volver</div>
					<div class="contact-frame" v-if="show">
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
									<button type="button" v-on:click="show = !show">Ver mapa</button>
								</div>
							</div>
							
							<div class="form">
								<h4>Habla con nosotros</h4>
								<div class="input-group">
									<label>Nombre y apellidos</label>
									<input type="text" v-model="form.name">
								</div>
								<div class="input-group">
									<label>Asunto</label>
									<input type="text" v-model="form.subject">
								</div>
								<div class="input-group">
									<label>Correo electrónico</label>
									<input type="email" v-model="form.email">
								</div>
								<div class="input-group">
									<label>Mensaje</label>
									<textarea v-model="form.content"></textarea>
								</div>
								
								<button type="button" v-on:click="send">Enviar</button>
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
			show: true,
			form: {
				name: "",
				subject: "",
				email: "",
				content: ""
			}
		}
	},
	methods: {
		send() {
			console.log(this.form)
		}
	}
});