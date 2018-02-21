const App = new Vue({
	el: "#app",
	template:	`<transition name="fade">
					<router-view></router-view>
				</transition>`,
	router: Router
});