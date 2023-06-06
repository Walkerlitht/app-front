(function () {
    "use strict";

    function PainelImagemCtrl() {
        var $ctrl = this;
        $ctrl.$onInit = onInit;


        function onInit() {
            $ctrl.imagem = carregaImagemPadrao();
        }

        function carregaImagemPadrao() {
            var imagem = new Image(116, 109.7392578125);
            imagem.src = 'setup/arquivos/imagens/imagemPadrao.png';

            return imagem;
        }
    }

    angular.module('mainApp').component('painelImagem', {
        templateUrl: 'app/componentes/painel-imagem/painel-imagem.html',
        controller: PainelImagemCtrl,
        bindings: {
            imagem: '='
        }
    })

})();