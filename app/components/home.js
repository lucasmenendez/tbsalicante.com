let Home = Vue.component("home-component", {
	template:	`<div id="homepage">
					<div class="inner">
						<header class="header">
							<h1 class="logo">
								<router-link :to="{ name: 'home' }">
									<img src="assets/img/logo.svg"/>
									Tattoo Barber Shop Alc
								</router-link>
							</h1>
						</header>
						<nav class="menu">
							<router-link :to="{ name: 'tattoos' }">
								<img src="assets/icons/tattoo.svg"/>
								Tattoo Studio
							</router-link>
							<router-link :to="{ name: 'barber' }">
								<img src="assets/icons/barber.svg"/>
								Barber Shop
							</router-link>
							<router-link :to="{ name: 'barber' }">
								<img src="assets/icons/family.svg"/>
								TBS Family
							</router-link>
							<router-link :to="{ name: 'barber' }">
								<img src="assets/icons/studio.svg"/>
								The Studio
							</router-link>
						</nav>
					</div>
				</div>`
});