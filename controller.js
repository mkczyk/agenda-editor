var app = angular.module('myApp', []);
 
app.controller('myCtrl', function($scope) {
  $scope.myText = "World";
  
  $scope.myResult = function () {
    return "Hello " + $scope.myText + "!";
  };
});