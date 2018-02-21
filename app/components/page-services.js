let PageServices = Vue.component("page-services-component", {
	template:   `<div class="page-services">
					<h3 class="title">{{ title }}</h3>
					<div class="services">
						<div class="service" v-for="service in services">
							<div class="service-thumbnail">
								<img v-bind:src="service.thumbnail">
							</div>
							<div class="service-info">
								<div class="info-header">
									<img class="info-icon" v-bind:src="service.icon">
									<h4 class="info-title">{{ service.title }}</h4>
								</div>
								<p class="info-description" v-if="service.description">{{ service.description }}</p>
								<small class="info-extra" v-if="service.extra">{{ service.extra }}</small>
								<div class="service-subservices" v-if="service.subservices">
									<div class="subservice-info" v-for="subservice in service.subservices">
										<p class="subservice-description">{{ subservice.description }}</p>
										<span class="subservice-price"><span v-if="subservice.from">desde</span> {{ subservice.price }} €</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>`,
	props: {
		title: {
			type: String,
			required: true
		},
		services: {
			type: Array,
			required: true
		}
	}
});