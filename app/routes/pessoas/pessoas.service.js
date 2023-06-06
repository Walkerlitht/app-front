(function () {
    "use strict";

    function Pessoa($http, Api) {

        var resource = {};

        resource.cadastrar = function(pessoa) {
            return $http.post(Api + '/pessoa', pessoa);
        }

        resource.query = function () {
            return $http.get(Api + '/pessoa');
        }

        resource.findById = function (id) {
            return $http.get(Api + '/pessoa/' + id);
        }

        resource.remover = function (id) {
            return $http.delete(Api + '/pessoa/' + id);
        }

        resource.TiposAcesso = [
            {
                value: 'ILIMITADO',
                label: 'Ilimitado'
            },
            {
                value: 'ESPECIFICO',
                label: 'Específico'
            },
            {
                value: 'LIMITADO',
                label: 'Limitado'
            }
        ]

        return resource;
    }

    angular.module('mainApp').factory('PessoaService', Pessoa);

})();