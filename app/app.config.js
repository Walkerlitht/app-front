(function () {
    angular.module('mainApp', ['ngRoute', 'ngFileUpload', 'ui.bootstrap', 'ngToast', 'ngAnimate']).config(['$routeProvider', 'ngToastProvider', function ($routeProvider, ngToastProvider) {
        $routeProvider.when('/', {
            redirectTo: '/'
        })

        ngToastProvider.configure({
            animation: 'slide',
            timeout: 2000
        })
    }]);

})();