// the controller for the modal itself
// (separate from underlying view/directive)
app.controller('myContactInstance', ['$scope', '$uibModalInstance', 'customer', function($scope, $uibModalInstance, customer) {

  

  $scope.ok = function() {
    $scope.data = {
              name: $scope.name,
              adress: $scope.adress,
              zipCode: $scope.zipCode,
              city: $scope.city,
              phone: $scope.phone,
              email: $scope.email
              };

    // user approves om seleted option
    // so send the selected option back to the myModal directive
    // (modalInstance.result.then(...))
    // modalInstance.result.then($scope.name, $scope.adress, $scope.zipCode, $scope.city, $scope.phone, $scope.email);
    $uibModalInstance.close($scope.data);

    console.log($scope.data);
    // console.log($scope.adress);
    // console.log($scope.name);
    // console.log($scope.adress);
    // console.log($scope.zipCode);
    // customer.create(data);
  };

  $scope.cancel = function() {
    // user does not approve/ignored us
    // so send nothing back to the myModal directive
    // (modalInstance.result.then(...))
    $uibModalInstance.dismiss();
  };
    // customer.create(data);
}]);