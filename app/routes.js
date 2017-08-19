var app = angular.module('app');

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state({
        name: 'index',
        url: '',
        templateUrl: 'app/templates/index.html'
    });

    $stateProvider.state({
        name: 'tattoos',
        url: '/tattoos',
        controller: 'tattoosCtrl',
        templateUrl: 'app/templates/tattoos.html'
    });

    $stateProvider.state({
        name: 'barber',
        url: '/barber',
        controller: 'barberCtrl'
    });

    $urlRouterProvider.otherwise('/');
});