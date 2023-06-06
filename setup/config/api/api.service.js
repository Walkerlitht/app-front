(function () {

    function Api() {
        return 'http://localhost:8180/app-back-1.0-SNAPSHOT/api';
    }

    angular.module('mainApp').factory('Api', Api);

})();