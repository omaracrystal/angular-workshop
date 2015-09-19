var demoApp = angular.module("demoApp", []);

demoApp.controller('FirstController', function($scope) {
  $scope.message= "Hello there!";
  $scope.change = function() {
    console.log('hello');
      if ($scope.name === 'Crystal') {
        alert("AWESOME!");
      }
    }
});
