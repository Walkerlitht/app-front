(function () {
    "use strict";

    function ConsultaRetiradaCtrl(UtilFormat) {
        var $ctrl = this;
        $ctrl.$onInit = onInit;
        $ctrl.formataData = formataData;

        function onInit() {
            inicializarValores();
        }

        function inicializarValores() {
            if (!$ctrl.consulta) {
                $ctrl.consulta = {};
            }

            if (!$ctrl.consulta.dataRetirada) {
                $ctrl.consulta.dataRetirada = '';
            }

            if (!$ctrl.consulta.matricula) {
                $ctrl.consulta.matricula = '';
            }

            if (!$ctrl.consulta.idProduto) {
                $ctrl.consulta.idProduto = '';
            }
        }

        function formataData(data) {
            return  UtilFormat.data(data);
        }

    }

    angular.module('mainApp').component('consultaRetirada', {
        templateUrl: 'app/routes/retirada/consulta-de-retirada/consulta-de-retirada.html',
        controller: ConsultaRetiradaCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/consulta-de-retirada', {
            template: '<consulta-retirada></consulta-retirada>'
        })
    }])

})();