let Navbar = Vue.component("navbar-component", {
	template:	`<header id="navbar">
					<div class="inner">
						<h1 class="logo">
							<router-link :to="{ name: 'home' }">
								<img src="assets/img/logo.svg"/>
								Tattoo Barber Shop Alc
							</router-link>
						</h1>
						<span class="hamburger" v-bind:class="{ cross: toggleMenu }" v-on:click="toggleMenu = !toggleMenu"></span>
						<nav class="main-menu" v-bind:class="{ show: toggleMenu }">
							<router-link :to="{ name: 'tattoos' }">
								<img src="assets/icons/tattoo.svg"/>
								Tattoo Studio
							</router-link>
							<router-link :to="{ name: 'barber' }">
								<img src="assets/icons/barber_shop.svg"/>
								Barber Shop
							</router-link>
							<router-link :to="{ name: 'tbsfamily' }">
								<img src="assets/icons/family.svg"/>
								TBS Family
							</router-link>
							<router-link :to="{ name: 'thestudio' }">
								<img src="assets/icons/studio.svg"/>
								The Studio
							</router-link>
						</nav>
					</div>
				</header>`,
	data() {
		return {
			toggleMenu: false
		}
	}
});