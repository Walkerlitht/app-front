(function () {
    "use strict";

    function GridCtrl($location) {
        var $ctrl = this;
        $ctrl.$onInit = onInit;
        $ctrl.ordenarLista = ordenarLista;
        $ctrl.selecionar = selecionar;
        $ctrl.parametrosUrl = parametrosUrl;

        function onInit() {
            $ctrl.grid.loader = true;
            delete $ctrl.grid.selectedRow;
        }

        function ordenarLista($index) {

            if ($index === 0) {
                $ctrl.indice = 0;
            }

            let lista = [];

            for (let i = 0; i < $ctrl.grid.colunas.length; i++) {
                lista.push($ctrl.grid.colunas[i].campo)
            }

            $ctrl.lista = lista;
        }

        function parametrosUrl() {
            $location.search(angular.merge($ctrl.grid.selectedRow));
        }

        function selecionar(selecionado) {
            $ctrl.grid.selectedRow = selecionado;
        }
    }

    angular.module('mainApp').component('grid', {
        templateUrl: 'app/componentes/grid/grid.html',
        controller: GridCtrl,
        bindings: {
            grid: '=',
        }
    });

})();
