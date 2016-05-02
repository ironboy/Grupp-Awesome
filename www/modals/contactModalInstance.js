app.controller ('contactModalInstance', [ '$scope', '$uibModalInstance', 'kontakt', function($scope, $uibModalInstance, kontakt){

	$scope.konakt = kontakt;

	$scope.ok = function () {
		 $uibModalInstance.close();
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss();
	};

}]);