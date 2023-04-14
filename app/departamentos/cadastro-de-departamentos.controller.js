(function () {
    "use strict";

    function CadastroDeDepartamentosCtrl() {
        var $ctrl = this;
    }

    angular.module('mainApp').component('cadastroDeDepartamentos', {
        templateUrl: 'app/departamentos/cadastro-de-departamentos.html',
        controller: CadastroDeDepartamentosCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cadastro-de-departamentos', {
            template: '<cadastro-de-departamentos></cadastro-de-departamentos>'
        })
    }])


})();