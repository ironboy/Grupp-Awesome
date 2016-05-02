app.controller ('myModalInstance', [ '$scope', '$uibModalInstance', 'kontakt', function($scope, $uibModalInstance, fastighet){

	$scope.konakt = kontakt;

	$scope.ok = function () {
		 $uibModalInstance.close();
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss();
	};

}]);