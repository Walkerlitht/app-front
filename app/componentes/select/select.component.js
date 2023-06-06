(function () {
    "use strict";

    function SelectCtrl() {
        var $ctrl = this;
    }

    angular.module('mainApp').component('selectOptions', {
        templateUrl: 'app/componentes/select/select.html',
        controller: SelectCtrl,
        bindings: {
            opcoes: '=',
            modelo: '=',
            esconderNull: '=',
        }
    })

})();