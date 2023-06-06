(function () {
    "use strict";

    function CadastroDePessoasCtrl(PessoaService, Toast, $timeout, $location, $routeParams) {
        var $ctrl = this;
        $ctrl.$onInit = onInit;
        $ctrl.abrirModal = abrirModal;
        $ctrl.salvar = salvar;
        $ctrl.voltar = voltar;

        function onInit() {
            $ctrl.tiposAcesso = PessoaService.TiposAcesso;

            $ctrl.pessoa = $routeParams.pessoa;
        }

        function abrirModal() {
            $ctrl.modal = true;
        }

        function salvar() {
            cadastrar($ctrl.pessoa);
        }

        function cadastrar(pessoa) {
            PessoaService.cadastrar(pessoa).then(onSuccess).catch(onError);

            function onSuccess(res) {
                if (res && res.data) {
                    console.log('Registro salvo com sucesso!');
                    Toast.success('Registro salvo com sucesso!');
                }
                $location.path('/pessoas');
            }

            function onError(res) {
                if (res && res.data) {
                    console.log(res.data);
                    Toast.danger('Erro ao salvar registro!');
                }
            }
        }

        function voltar() {
            $location.path('/pessoas').search({});
        }
    }

    angular.module('mainApp').component('cadastroDePessoas', {
        templateUrl: 'app/routes/pessoas/cadastro-de-pessoas/cadastro-de-pessoas.html',
        controller: CadastroDePessoasCtrl,

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cadastro-de-pessoas/:url', {
            template: '<cadastro-de-pessoas></cadastro-de-pessoas>'
        })
    }])
})();