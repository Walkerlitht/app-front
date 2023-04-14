(function () {
    "use strict";

    function CadastroDeProdutosCtrl() {
        var $ctrl = this;
    }

    angular.module('mainApp').component('cadastroDeProdutos', {
        templateUrl: 'app/produtos/cadastro-de-produtos.html',
        controller: CadastroDeProdutosCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cadastro-de-produtos', {
            template: '<cadastro-de-produtos></cadastro-de-produtos>'
        })
    }])

})();