angular.module('app').factory('meanCachedCourses', function (meanCourse) {
    var courseList;

    return {
        query: function() {
            if(!courseList) {
                courseList = meanCourse.query();
            }

            return courseList;
        }
    }
});