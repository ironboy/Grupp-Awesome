app.controller("forsale", ["$scope", "workers", function($scope, workers) {
		
		$scope.staffDatas = workers.get(function(data){

					console.log(data);				
						
				});
	}]);