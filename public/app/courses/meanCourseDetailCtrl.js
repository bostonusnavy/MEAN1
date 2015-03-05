angular.module('app').controller('meanCourseDetailCtrl', function ($scope, meanCachedCourses, $routeParams) {
    meanCachedCourses.query().$promise.then(function (collection) {
       collection.forEach(function(course) {
           if(course._id === $routeParams.id) {
               $scope.course = course;
           }
       })
    });
    //$scope.course = meanCourse.get({_id:$routeParams.id})
});