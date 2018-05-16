'use strict';
angular.module('app').directive('appNav', function () {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '../views/template/nav.html'
    };
});