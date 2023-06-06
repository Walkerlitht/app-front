(function () {

    "use strict";

    function Toast(ngToast) {

        var toast = {};

        var showToast = function(message, clazz) {
            ngToast.create({
                className: clazz,
                content: message,
            });
        };

        toast.success = function(message) {
            showToast(message, 'success');
        };

        toast.warning = function(message) {
            showToast(message, 'warning');
        };

        toast.info = function(message) {
            showToast(message, 'info');
        };

        toast.danger = function(message) {
            showToast(message, 'danger');
        };

        return toast;
    }

    angular.module('mainApp').factory('Toast', Toast);

})();