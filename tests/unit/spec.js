describe('frontend.DefaultController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('frontend.DefaultController', {
      $scope: $scope
    });
  }));

  it('initially has a name', function () {
    assert.equal($scope.name, 'default');
  });

});