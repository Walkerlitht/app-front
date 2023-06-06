(function () {
    "use strict";

    function ModalConfirmaCtrl() {
        var $ctrl = this;
        $ctrl.$onInit = onInit;

        function onInit() {
            $ctrl.modalShow = false;
        }
    }

    angular.module('mainApp').component('modalConfirma', {
        templateUrl: 'app/componentes/modal-confirma/modal-confirma.html',
        controller: ModalConfirmaCtrl,
        bindings: {
            modalShow: '=',
            confirma: '&'
        }
    })
})();