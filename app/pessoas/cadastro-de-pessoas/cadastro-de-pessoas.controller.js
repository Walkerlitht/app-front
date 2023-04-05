(function () {
    "use strict";

    function CadastroProdutosCtrl() {
        var $ctrl = this;
        $ctrl.$onInit = onInit;
        $ctrl.salvar = salvar;

        function onInit() {
            $ctrl.modal = false;
        }
        function salvar() {
            $ctrl.modal = true;
        }
    }

    angular.module('mainApp').component('cadastroDePessoas', {
        templateUrl: '/app/pessoas/cadastro-de-pessoas/cadastro-de-pessoas.html',
        controller: CadastroProdutosCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cadastro-de-pessoas', {
            template: '<cadastro-de-pessoas></cadastro-de-pessoas>'
        })
    }]);



})();