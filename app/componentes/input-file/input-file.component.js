(function () {
    "use strict";

    function InputFileCtrl($scope) {
        var $ctrl = this;
        $ctrl.$onInit       = onInit;

        function onInit() {
        }

        $scope.lerImagem = function (imagem) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $ctrl.imagem.src  = e.target.result;
                $scope.$apply();
            }
            reader.readAsDataURL(imagem.files[0]);
        }
    }


    angular.module('mainApp').component('inputFileImage', {
        templateUrl: 'app/componentes/input-file/input-file.html',
        controller: InputFileCtrl,
        bindings: {
            imagem: '=',
            carregarImagem: '&'
        }
    })

})();