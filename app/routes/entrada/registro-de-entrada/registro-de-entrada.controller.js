(function () {
    "use strict";

    function RegistroDeEntradaCtrl(GridFactory, ProdutoService, $location, $timeout, Toast) {
        var $ctrl = this;
        $ctrl.$onInit = onInit;
        $ctrl.pesquisaRapida = pesquisaRapida;

        function onInit() {
            gerarGrid();
        }

        function gerarGrid() {
            $ctrl.grid = GridFactory.criarGrid(findAll(),
                [
                    {
                        campo: 'id',
                        titulo: 'ID Produto',
                    },
                    {
                        campo: 'nome',
                        titulo: 'Nome',
                    },
                    {
                        campo: 'categoria',
                        titulo: 'Categoria',
                    },
                    {
                        campo: 'descricao',
                        titulo: 'Descrição',
                    },
                ],
                {

                });

            function findAll() {
                var params = {};
                return ProdutoService.query(params).then(function (res) {
                    $timeout(function () {
                        $ctrl.grid.dados = res.data;
                        $ctrl.grid.loader = false;
                    }, 1000);

                })
            }
        }

        function pesquisaRapida() {

        }
    }

    angular.module('mainApp').component('registroDeEntrada', {
        templateUrl: 'app/routes/entrada/registro-de-entrada/registro-de-entrada.html',
        controller: RegistroDeEntradaCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/registro-de-entrada', {
            template: '<registro-de-entrada></registro-de-entrada>'
        })
    }])



})();