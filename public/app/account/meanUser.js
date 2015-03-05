angular.module('app').factory('meanUser', function ($resource) {
    var UserResource = $resource('/api/user/:id', {_id: "@id"});

    UserResource.prototype.isAdmin = function() {
        return this.roles && this.roles.indexOf('admin') > -1;
    };

    return UserResource;
});