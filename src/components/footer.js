'use strict';
angular.module('app').directive('appFooter', function () {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '../views/template/footer.html'
    };
});