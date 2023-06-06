(function() {
    "use strict";

    function SessionStorage($window) {
        var sessao = $window.localStorage;

        sessao.login = function (login, senha) {
            var usuario = {};

            usuario = {
                login: login,
                senha: senha,
            }
            return usuario;
        }
        return sessao;
    }

    angular.module('mainApp').factory('SessionStorage', SessionStorage);

})();