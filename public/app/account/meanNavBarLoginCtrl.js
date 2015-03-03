angular.module('app').controller('meanNavBarLoginCtrl', function($scope, $http, $location, meanIdentity, meanNotifier, meanAuth) {
    $scope.identity = meanIdentity;
    $scope.signin = function(username, password) {
        meanAuth.authenticateUser(username, password).then(function (success) {
            if(success) {
                meanNotifier.notify('You have successfully logged in!');
            } else {
                meanNotifier.notify('Login failed. Incorrect Username and/or Password');
            }
        });
    };
        $scope.signout = function () {
        meanAuth.logoutUser().then(function () {
            $scope.username = "";
            $scope.password = "";
            meanNotifier.notify("You have successdfully logged out!");
            $location.path('/');
        })
    }
});