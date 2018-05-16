'use strict';
angular.module('app').directive('appHeader', function () {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '../views/template/header.html'
    };
});