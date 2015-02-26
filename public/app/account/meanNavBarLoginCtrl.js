angular.module('app').controller('meanNavBarLoginCtrl', function($scope, $http, meanIdentity, meanNotifier, meanAuth) {
    $scope.identity = meanIdentity;
    $scope.signin = function(username, password) {
        meanAuth.authenticateUser(username, password).then(function (success) {
            if(success) {
                meanNotifier.notify('You have successfully logged in!');
            } else {
                meanNotifier.notify('Login failed. Incorrect Username and/or Password');
            }
        });
    }
});