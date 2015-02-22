angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
       enable: true,
       requireBase: false
    });
    $routeProvider
        // "templateURL:" places file specified into "(ng-view)"
        // "controller:" specifies which controller to use
        .when('/', { templateUrl: '/partials/main', controller: 'pizza'});
        // you can '.' chain several "whens" together to handle different front-side routes before ';'
});

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.myVar = "Hello Angular!";
});

angular.module('app').controller('pizza', function($scope) {
    $scope.myVar = "Hello pizza!";
});