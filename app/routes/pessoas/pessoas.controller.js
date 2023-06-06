(function () {

    "use strict";

    function PessoasCtrl(PessoaService, GridFactory, $timeout, $location, Toast) {
        var $ctrl = this;
        $ctrl.$onInit = onInit;
        $ctrl.inserir = inserir;
        $ctrl.editar = editar;
        $ctrl.excluir = excluir;
        $ctrl.abrirModal = abrirModal;

        function onInit() {
            gerarGrid();
        }

        function inserir() {
            $location.path('/cadastro-de-pessoas/novo').search({});
        }

        function editar(pessoa) {
            if (pessoa) {
                PessoaService.findById($ctrl.grid.selectedRow.id).then(onSuccessGetPessoa).catch(onErrorGetPessoa);
            } else {
                Toast.warning('Selecione um registro!');
            }

            function onSuccessGetPessoa(response) {
                $ctrl.pessoa = response.data;

                $location.path('/cadastro-de-pessoas/:url').search({pessoa: $ctrl.pessoa});
            }

            function onErrorGetPessoa(response) {
                Toast.danger('Erro inesperado');
            }
        }

        function excluir(idPessoa) {
            $timeout(function () {
                PessoaService.remover(idPessoa).then(onSuccessRemover).catch(onErrorRemover).finally(onFinallyRemover);
            });

            function onSuccessRemover(res) {
                Toast.success('Registro removido com sucesso!');

            }

            function onErrorRemover(res) {
                Toast.danger('Falha ao remover registro');
            }

            function onFinallyRemover() {
                $ctrl.modal = !$ctrl.modal;
                gerarGrid();
            }
        }

        function abrirModal() {
            if ($ctrl.grid.selectedRow === undefined || $ctrl.grid.selectedRow === null) {
                Toast.warning('Selecione um registro!');
            } else {
                $ctrl.modal = !$ctrl.modal;
            }
        }

        function gerarGrid() {
            $ctrl.grid = GridFactory.criarGrid(findAll(),
                [
                    {
                        campo: 'matricula',
                        titulo: 'Matrícula',
                    },
                    {
                        campo: 'nome',
                        titulo: 'Nome'
                    },
                    {
                        campo: 'tipoAcesso',
                        titulo: 'Nível de Acesso',
                        template: '<span class="align-content-center">{{$ctrl.grid.dados[$index].tipoAcesso}}</span>'
                    },
                ],{

                })

            function findAll() {
                var params = {};

                return PessoaService.query(params).then(function (res) {
                    $timeout(function () {
                        $ctrl.grid.dados = res.data;
                        $ctrl.grid.loader = false;
                    }, 1000);
                })
            }
        }
    }

    angular.module('mainApp').component('pessoas', {
        controller: PessoasCtrl,
        templateUrl: 'app/routes/pessoas/pessoas.html',
        bindings: {

        }

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/pessoas', {
            template: '<pessoas></pessoas>'
        })
    }])

})();