angular.module('app').controller('meanMainCtrl', function($scope, meanCachedCourses) {
    $scope.courses = meanCachedCourses.query();
});