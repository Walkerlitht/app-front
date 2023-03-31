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

    angular.module('mainApp').component('cadastroDeProdutos', {
        templateUrl: '/app/produtos/cadastro-de-produtos/cadastro-de-produtos.html',
        controller: CadastroProdutosCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cadastro-de-produtos', {
            template: '<cadastro-de-produtos></cadastro-de-produtos>'
        })
    }]);



})();