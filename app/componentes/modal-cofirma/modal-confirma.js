(function () {
    "use strict";

    function ModalConfirmaCtrl() {
        var $ctrl = this;
        $ctrl.$onInit = onInit;
        $ctrl.toggleModal = toggleModal;
        $ctrl.confirm = confirm;
        $ctrl.cancel = cancel;
        function onInit() {
        }

        function toggleModal() {
            $ctrl.modalShow = !$ctrl.modalShow;
        }

        function confirm() {
            return true;
        }

        function cancel() {
            return false;
        }
    }

    angular.module('mainApp').component('modalConfirma', {
        templateUrl: 'app/componentes/modal-cofirma/modal-confirma.html',
        controller: ModalConfirmaCtrl,
        bindings: {
            modalShow: '='
        }
    });

})();