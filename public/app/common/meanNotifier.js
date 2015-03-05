angular.module('app').value('meanToastr', toastr);

angular.module('app').factory('meanNotifier', function (meanToastr) {
    return {
        notify: function(msg)  {
            meanToastr.success(msg);
            console.log(msg);
        },
        error: function(msg) {
            meanToastr.error(msg);
            console.log(msg);
        }
    }
});
