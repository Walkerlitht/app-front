(function () {
    "use strict";

    function BtnCtrl() {
        var $ctrl = this;
    }

    angular.module('mainApp').component('btn', {
        templateUrl: 'app/componentes/btn/btn.html',
        controller: BtnCtrl,
        bindings: {
            classeBotao: '@',
            metodo: '&',
            texto: '@'
        }
    });

})();
