app.controller("broker", ["$scope", "workers", function($scope, workers) {

	function loadworkers(data) {
		$scope.staffDatas = data || workers.get(function(data) {
			console.log(data);
			}
		);
	}

	loadworkers();

}]);