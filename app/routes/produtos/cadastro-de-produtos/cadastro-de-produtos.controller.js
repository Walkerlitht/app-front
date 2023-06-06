(function () {
    "use strict";

    function CadastroDeProdutosCtrl(ProdutoService, PessoaService, $location, $routeParams, Toast) {
        var $ctrl = this;
        $ctrl.$onInit = onInit;
        $ctrl.abrirModal = abrirModal;
        $ctrl.salvar = salvar;
        $ctrl.voltar = voltar;

        function onInit() {
            $ctrl.modal = false;
            $ctrl.tiposAcesso = PessoaService.TiposAcesso

            $ctrl.produto = $routeParams.produto;

            carregarImagem();
        }

        function carregarImagem() {
            if ($ctrl.produto.id) {
                ProdutoService.getImagem($ctrl.produto.id).then(onSuccessImagem).catch(onErrorImagem);
            }
        }

        function abrirModal(novo) {
            $ctrl.modal = !$ctrl.modal;

            $ctrl.salvarNovo = novo;
        }

        function after() {
            $ctrl.modal =  !$ctrl.modal;
        }

        function voltar() {
            $location.path('/produtos').search({});
        }

        function salvar() {

            if ($ctrl.produto) {

                if ($ctrl.imagem) {
                    let isImagemPadrao = $ctrl.imagem.currentSrc.includes('setup/arquivos/imagens/imagemPadrao.png');

                    if (!isImagemPadrao) {
                        $ctrl.produto.imagem = {};
                        $ctrl.produto.imagem.base64 = $ctrl.imagem.currentSrc;
                    }
                }
                cadastrar($ctrl.produto);
            }
            if ($ctrl.salvarNovo === true) {
                salvarNovo();
            }
        }

        function salvarNovo() {
            $ctrl.modal = false;

            if ($ctrl.produto) {
                delete $ctrl.produto;
            }
            $location.path('/cadastro-de-produtos/novo').search({});
        }

        function cadastrar(produto) {
            ProdutoService.cadastrar(produto).then(onSuccess).catch(onError);
        }

        function onSuccess(res) {
            after();

            if (res !== null && res.data !== null) {
                $ctrl.produto = res.data;

                console.log('Produto salvo com sucesso!');
                Toast.success('Produto salvo com sucesso!');
            }

            $location.path('/produtos');
        }

        function onSuccessImagem(response) {
            if (response && response.data) {
                $ctrl.imagem.src = 'data:image/png;base64,' + response.data;

                console.log('Imagem carregada com sucesso!');
                Toast.success('Imagem carregada com sucesso!');
            }
        }

        function onError(response) {
            if (response && response.data) {
                console.log('Erro inesperado: ' + response.data);
                Toast.danger('Erro inesperado: ' + response.data);
            }
        }

        function onErrorImagem(response) {
            console.log('Erro inesperado: ' + response.data);

            if (response.data !== 'Imagem inválida') {
                Toast.danger(response.data);
            }
        }
    }

    angular.module('mainApp').component('cadastroDeProdutos', {
        templateUrl: 'app/routes/produtos/cadastro-de-produtos/cadastro-de-produtos.html',
        controller: CadastroDeProdutosCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cadastro-de-produtos/:url', {
            template: '<cadastro-de-produtos></cadastro-de-produtos>'
        })
    }])

})();