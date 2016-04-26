angular.module('myApp', ['ui.bootstrap'])
.controller('NavbarController', ['$scope', function($scope){
  $scope.isCollapsed = true;
}]);