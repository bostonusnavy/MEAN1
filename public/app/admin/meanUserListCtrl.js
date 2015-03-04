angular.module('app').controller('meanUserListCtrl', function ($scope, meanUser) {
    $scope.users = meanUser.query();
});