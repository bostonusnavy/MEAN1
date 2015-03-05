angular.module('app').controller('meanUserListCtrl', function meanUserListCtrl($scope, meanUser) {
    $scope.users = meanUser.query();
});