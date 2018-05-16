'use strict';
angular.module('app').directive('appArticle', function () {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: '../views/template/article.html'
    };
});