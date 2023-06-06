(function () {

    "use strict";

    function PesquisaCtrl() {
        var $ctrl = this;
    }

    angular.module('mainApp').component('pesquisa', {
        templateUrl: '',
        controller: PesquisaCtrl,
        binding: {
            data: '=',

        }
    })

})();