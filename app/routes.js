var app = angular.module('app');

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state({
        name: 'index',
        url: '/',
        templateUrl: 'app/templates/index.html'
    });

    $stateProvider.state({
        name: 'page',
        url: '',
        templateUrl: 'app/templates/page.html'
    });

    $stateProvider.state({
        name: 'page.tattoos',
        url: '/tattoos',
        controller: 'tattoosCtrl',
        templateUrl: 'app/templates/tattoos.html'
    });

    $stateProvider.state({
        name: 'page.barber',
        url: '/barber',
        controller: 'barberCtrl'
    });

    $urlRouterProvider.otherwise('/');
});