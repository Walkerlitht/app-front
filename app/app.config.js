(function () {
    angular.module('mainApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            redirectTo: '/'
        })
    }]);

})();