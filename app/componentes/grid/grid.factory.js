(function () {
    "use strict";

    var grid = [];

    function GridService() {

        var resource = {};

        resource.criarGrid = function (dados, colunas, opcoes) {
            grid.dados = dados;
            grid.opcoes = opcoes;
            grid.colunas = colunas;

            return  grid;
        }

        resource.carregarOpcoes = function (opcoes) {
        }

        return resource;
    }

    angular.module('mainApp').factory('GridFactory', GridService);

})();