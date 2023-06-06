(function () {
    "use strict";

    function NiveisDeAcessoCtrl(NivelAcessoService, PessoaService) {
        var $ctrl = this;
        $ctrl.$onInit = onInit;
        $ctrl.abrirModal = abrirModal;
        $ctrl.cadastrar = cadastrar;

        function onInit() {
            $ctrl.modal = false;
            $ctrl.tiposAcesso = PessoaService.TiposAcesso;
        }

        function abrirModal() {
            $ctrl.modal = true;
        }

        function cadastrar(nivelAcesso) {
            NivelAcessoService.cadastrar(nivelAcesso).then(function (res) {
                if (res !== null && res.data != null) {
                    $ctrl.nivelAcesso = res.data;
                }
            }).finally(after);
        }

        function after() {
            $ctrl.modal = false;
        }

    }

    angular.module('mainApp').component('cadastroDeNiveisDeAcesso', {
        templateUrl: 'app/routes/niveis-de-acesso/cadastro-de-niveis-de-acesso/cadastro-de-niveis-de-acesso.html',
        controller: NiveisDeAcessoCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cadastro-de-niveis-de-acesso', {
            template: '<cadastro-de-niveis-de-acesso></cadastro-de-niveis-de-acesso>'
        })
    }])

})();