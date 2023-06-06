(function () {
    "use strict";

    function TesteCtrl(PessoaService, GridFactory, ModalFactory, Toast) {
        var $ctrl = this;
        $ctrl.$onInit = onInit;

        function onInit() {
            $ctrl.tiposAcesso = PessoaService.TiposAcesso;

            gerarGrid();

            Toast.danger('Erro!');
        }

        function gerarGrid() {
            $ctrl.grid = GridFactory.criarGrid([
                {
                   data: 'Carlos',
                },
                {
                   data: 'Operário',
                },
                {
                   data: 1,
                },
                {
                    data: 'Joao',
                },
                {
                    data: 'Operário',
                },
                {
                    data: 2,
                },
            ],
            [
                {
                    name: 'Coluna 1',
                },
                {
                    name: 'Coluna 2'
                },
                {
                    name: 'Coluna 3'
                }
            ],
            [

            ]
            );
        }
    }

    angular.module('mainApp').component('teste', {
        templateUrl: 'app/routes/teste/teste.html',
        controller: TesteCtrl

    }).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/teste', {
            template: '<teste></teste>'
        });
    }]);

})();