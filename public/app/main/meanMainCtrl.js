angular.module('app').controller('meanMainCtrl', function($scope) {
    $scope.courses = [
        {name: 'Course Item #1', featured: true, published: new Date ('1/1/2015')},
        {name: 'Course Item #2', featured: true, published: new Date ('1/1/2015')},
        {name: 'Course Item #3', featured: false, published: new Date ('4/4/2012')},
        {name: 'Course Item #4', featured: true, published: new Date ('1/1/2015')},
        {name: 'Course Item #5', featured: true, published: new Date ('2/1/2015')},
        {name: 'Course Item #6', featured: false, published: new Date ('1/1/2015')},
        {name: 'Course Item #7', featured: false, published: new Date ('1/1/2015')},
        {name: 'Course Item #8', featured: false, published: new Date ('6/6/2012')},
        {name: 'Course Item #9', featured: true, published: new Date ('1/1/2015')},
        {name: 'Course Item #10', featured: true, published: new Date ('1/1/2014')}
    ]
});