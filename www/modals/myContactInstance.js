// the controller for the modal itself
// (separate from underlying view/directive)
app.controller('myContactInstance', ['$scope', '$uibModalInstance', 'customer', function($scope, $uibModalInstance, customer) {




  $scope.ok = function() {


    // user approves om seleted option
    // so send the selected option back to the myModal directive
    // (modalInstance.result.then(...))
    // modalInstance.result.then($scope.name, $scope.adress, $scope.zipCode, $scope.city, $scope.phone, $scope.email);
    $uibModalInstance.close($scope.data);

    console.log($scope.data);

  };

  $scope.cancel = function() {
    // user does not approve/ignored us
    // so send nothing back to the myModal directive
    // (modalInstance.result.then(...))
    $uibModalInstance.dismiss();
  };
    // customer.create(data);
}]);