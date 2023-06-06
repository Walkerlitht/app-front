(function () {
    "use strict";

    function ModalFactory($timeout, $uibModal) {
        var modal = {};

        modal.open = function () {
            return $q(function () {
                $uibModal.open({
                    animation: true,
                    templateUrl: 'app/componentes/modal/modal.html',
                    controller: 'modal',
                    size: 'md',
                    keyboard: false,
                    backdrop: 'static',
                    resolve: {
                        mensagem: resolve
                    }
                });
            })
        }

        return modal;
    }

    angular.module('mainApp').factory('ModalFactory', ModalFactory);

})();