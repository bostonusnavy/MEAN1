angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
    });
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'meanMainCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list', controller: 'meanUserListCtrl'});
});


// "templateURL:" places file specified into "(ng-view)"
// "controller:" specifies which controller to use
// you can '.' chain several "whens" together to handle different front-side routes before ';'
