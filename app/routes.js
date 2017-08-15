var app = angular.module('app');

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);

    $stateProvider.state({
        name: 'base',
        url: '',
        controller: 'mainCtrl'
    });

    $stateProvider.state({
        name: 'base.index',
        url: '/',
        controller: 'indexCtrl',
        templateUrl: 'app/templates/index.html'
    });

    $stateProvider.state({
        name: 'base.tattoos',
        url: '/tattoos',
        controller: 'tattoosCtrl'
    });

    $stateProvider.state({
        name: 'base.barber',
        url: '/barber',
        controller: 'barberCtrl'
    });

    $urlRouterProvider.otherwise('/');
});