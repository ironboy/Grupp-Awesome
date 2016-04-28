app.controller("forsale", ["$scope", "salesstaff", function($scope, salesstaff) {
	
			$scope.staffDatas = data;

			$scope.staffDatas = salesstaff.get(function(data) { 
				console.log(data);
			});
	
}]);