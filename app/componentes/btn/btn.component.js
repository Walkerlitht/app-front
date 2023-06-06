(function () {
    "use strict";

    function BtnCtrl() {
        var $ctrl = this;
        $ctrl.$onInit = onInit;

        function onInit() {
            carregarImagem();
        }

        function carregarImagem() {

        }
    }

    angular.module('mainApp').component('btn', {
        templateUrl: 'app/componentes/btn/btn.html',
        controller: BtnCtrl,
        bindings: {
            metodo: '&',
            texto: '@',
            classeBotao: '@',
            imagem: '@'
        }
    })

})();