angular.module('app').factory('meanAuth', function ($http, meanIdentity, $q, meanUser) {
    return {
        authenticateUser: function(username, password) {
            var dfd = $q.defer();
            $http.post('/login', {username:username, password:password}).then(function (response) {
                if(response.data.success) {
                    var user = new meanUser();
                    angular.extend(user, response.data.user);
                    meanIdentity.currentUser = user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        },
        logoutUser: function() {
            var dfd = $q.defer();
            $http.post('/logout', {logout: true}).then(function () {
                meanIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        },
        authorizeCurrentUserForRoute: function(role) {
            if(meanIdentity.isAuthorized(role)) {
                return true;
            } else {
                return $q.reject('Not Authorized');
            }
        }
    }
});