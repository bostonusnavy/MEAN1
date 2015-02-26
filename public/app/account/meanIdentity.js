angular.module('app').factory('meanIdentity', function () {
    return {
        currentUser: undefined,
        isAuthenticated: function() {
            return !!this.currentUser;
        }
    }
});