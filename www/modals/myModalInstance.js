app.controller ('myModalInstance', [ '$scope', '$uibModalInstance', 'fastighet', function($scope, $uibModalInstance, fastighet){


	console.log(fastighet)

	$scope.fastighet = fastighet;

	$scope.ok = function () {
		$uibModalInstance.close();
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss();
	};

}]);