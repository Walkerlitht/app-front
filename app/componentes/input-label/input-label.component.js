(function () {
    "use strict";

    function InputLabelCtrl() {
        var $ctrl = this;
    }

    angular.module('mainApp').component('inputLabel', {
        templateUrl: 'app/componentes/input-label/input-label.html',
        controller: InputLabelCtrl,
        bindings: {
            tipo: '@',
            texto: '@',
            modelo: '=',
            name: '@'
        }
    })

})();