(function () {
    "use strict";

    function RegistroDeRetiradaCtrl() {
        var $ctrl = this;
    }

    angular.module('mainApp').component('registroDeRetirada', {
        templateUrl: 'app/routes/retirada/registro-de-retirada/registro-de-retirada.html',
        controller: RegistroDeRetiradaCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/registro-de-retirada', {
            template: '<registro-de-retirada></registro-de-retirada>'
        })
    }])

})();