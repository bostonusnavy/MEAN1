angular.module('app').factory('meanIdentity', function ($window, meanUser) {
    var currentUser;
    if (!!$window.bootstrappedUserObject) {
        currentUser = new meanUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        }
    }
});