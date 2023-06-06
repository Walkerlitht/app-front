(function () {
    "use strict";

    function ProdutosCtrl(GridFactory, ProdutoService, $location, $timeout, Toast) {
        var $ctrl = this;
        $ctrl.$onInit = onInit;
        $ctrl.inserir = inserir;
        $ctrl.editar = editar;
        $ctrl.excluir = excluir;
        $ctrl.abrirModal = abrirModal;

        function onInit() {
            gerarGrid();

            $ctrl.modal = !$ctrl.modal;
        }

        function abrirModal() {
            if ($ctrl.grid.selectedRow === undefined || $ctrl.grid.selectedRow === null) {
                Toast.warning('Selecione um registro!');
            } else {
                $ctrl.modal = !$ctrl.modal;
            }
        }

        function inserir() {
            $location.path('/cadastro-de-produtos/novo').search({});
        }

        function editar(produto) {
            if (produto) {
                $location.path('/cadastro-de-produtos/editar').search({produto: produto, idProduto: produto.id});

            } else {
                Toast.warning('Selecione um registro!');
            }
        }

        function excluir(idProduto) {
            if (idProduto) {
                $timeout(function () {
                    ProdutoService.excluir(idProduto).then(onSuccess).catch(onError).finally(onFinally);
                });
            }

            function onSuccess(res) {
                $ctrl.grid.loader = true;

                console.log('Produto excluido com sucesso!');
                Toast.success('Produto excluido com sucesso!');
            }

            function onError(res) {
                $ctrl.grid.loader = true;

                console.log('Falha ao tentar excluir o produto');
                Toast.danger('Falha ao tentar excluir o produto');
            }

            function onFinally() {
                $ctrl.modal = !$ctrl.modal;
                gerarGrid();
            }

        }


        function findAll() {
            var params = {};
            return ProdutoService.query(params).then(function (res) {
                $timeout(function () {
                    $ctrl.grid.dados = res.data;
                    $ctrl.grid.loader = false;
                }, 1000);

            })
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
        }
    }

    angular.module('mainApp').component('produtos', {
        templateUrl: 'app/routes/produtos/produtos.html',
        controller: ProdutosCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/produtos', {
            template: '<produtos></produtos>'
        })
    }]);

})();