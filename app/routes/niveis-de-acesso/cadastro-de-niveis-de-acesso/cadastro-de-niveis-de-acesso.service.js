(function () {
    "use strict";

    function NivelAcessoService($http, Api) {
        var resource = {};

        resource.cadastrar = function (nivelAcesso) {
            return $http.post(Api + '/nivel-de-acesso', nivelAcesso);
        }

        return resource;
    }

    angular.module('mainApp').factory('NivelAcessoService', NivelAcessoService);

})();