const routes = [
	{ name: "home", path: "/", component: Home },
	{ name: "tattoos", path: "/tattoos", component: Tattoos },
	{ name: "barber", path: "/barber", component: Barber },
	//{ name: "notfound", path: "*", component: NotFound }
]

const Router = new VueRouter({ routes });