(function () {
    "use strict";

    function TesteCtrl() {
        var $ctrl = this;
    }

    angular.module('mainApp').component('teste', {
        templateUrl: '/app/teste/teste.html',
        controller: TesteCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/teste', {
            template: '<teste></teste>'
        });
    }]);

})();