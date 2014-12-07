angular.module('raspi-server').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home/index.html',
            controller: 'home'
        });
});