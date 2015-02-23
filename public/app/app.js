angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
       enable: true,
       requireBase: false
    });
    $routeProvider
        // "templateURL:" places file specified into "(ng-view)"
        // "controller:" specifies which controller to use
        .when('/', { templateUrl: '/partials/main/main', controller: 'meanMainCtrl'});
        // you can '.' chain several "whens" together to handle different front-side routes before ';'
});

