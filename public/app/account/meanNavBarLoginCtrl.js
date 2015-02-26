angular.module('app').controller('meanNavBarLoginCtrl', function($scope, $http, meanIdentity, meanNotifier) {
    $scope.signin = function(username, password) {
        $http.post('/login', {username:username, password:password}).then(function (response) {
            if(response.data.success) {
                meanIdentity.currentUser = response.data.user;
                meanNotifier.notify('You have successfully logged in!');
            } else {
                meanNotifier.notify('Incorrect Username and/or Password');
            }
        })
    }
});