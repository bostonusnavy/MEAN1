angular.module('app').factory('meanIdentity', function ($window) {
    var currentUser;
    if (!!$window.bootstrappedUserObject) {
        currentUser = bootstrappedUserObject;
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        }
    }
});