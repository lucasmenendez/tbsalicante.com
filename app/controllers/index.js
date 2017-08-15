var app = angular.module('app');

app.controller('indexCtrl', function ($scope) {
    $scope.images = {
        entry: 'assets/img/entry.jpg',
        tattoos: 'assets/img/tattoo.jpg',
        barber: 'assets/img/barber.jpg'
    }
});