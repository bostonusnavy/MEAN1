angular.module('app').controller('meanProfileCtrl', function ($scope, meanAuth, meanIdentity, meanNotifier) {
    $scope.email = meanIdentity.currentUser.username;
    $scope.fname = meanIdentity.currentUser.firstName;
    $scope.lname = meanIdentity.currentUser.lastName;

    $scope.update = function () {
        var newUserData = {
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        };
        if($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        meanAuth.updateCurrentUser(newUserData).then(function () {
            meanNotifier.notify('Your user account information has been updated');
        }, function (reason) {
            meanNotifier.error(reason);
        })
    }
});