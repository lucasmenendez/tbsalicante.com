const Router = new VueRouter({
	mode: "history",
	linkActiveClass: "active",
	routes: [
		{ name: "home", path: "/", component: Home },
		{ name: "tattoos", path: "/tattoos", component: Tattoos },
		{ name: "barber", path: "/barber", component: Barber },
		{ name: "tbsfamily", path: "/tbsfamily", component: TBSFamily },
		{ name: "thestudio", path: "/thestudio", component: TheStudio },
		//{ name: "notfound", path: "*", component: NotFound }
	]
});