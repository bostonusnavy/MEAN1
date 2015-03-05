angular.module('app').controller('meanCourseListCtrl', function ($scope, meanCachedCourses) {
    $scope.courses = meanCachedCourses.query();

    $scope.sortOptions = [{value: "title", text: "Sort by Title"},
        {value: "published", text: "Sort by Published Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
});