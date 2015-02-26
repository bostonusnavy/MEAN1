angular.module('app').factory('meanAuth', function ($http, meanIdentity, $q) {
    return {
        authenticateUser: function(username, password) {
            var dfd = $q.defer();
            $http.post('/login', {username:username, password:password}).then(function (response) {
                if(response.data.success) {
                    meanIdentity.currentUser = response.data.user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        }
    }
});