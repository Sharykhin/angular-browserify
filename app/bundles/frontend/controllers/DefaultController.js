'use strict';

DefaultController.$inject = ['$scope', '_'];

function DefaultController($scope, _) {
    $scope.name='default';
    $scope.arr = [1,2,3];
}

module.exports = DefaultController;

