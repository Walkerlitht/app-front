(function () {
    "use strict";

    function ProdutoService($http, Api) {
        var resource = {};

        resource.query = function (params) {
            return $http.get(Api + '/produto', {
                params: params
            })
        }

        resource.findById = function (id) {
            return $http.get(Api + '/produto/' + id);
        }

        resource.cadastrar = function (produto) {
            return $http.post(Api + '/produto', produto);
        }

        resource.excluir = function (id) {
            return $http.delete(Api + '/produto/' + id);
        }

        resource.getImagem = function (id) {
            return $http.get(Api + '/imagem/' + id);
        }

        return resource;
    }

    angular.module('mainApp').factory('ProdutoService', ProdutoService)

})();