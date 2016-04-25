app.controller("buy", ["$scope", "property", function($scope, property) {
	
		$scope.values = property.get(function(data){

			console.log(data);				
				
		});

	











	/*
	
		$('btnFilter').on('click', function(){
			property.get(function(data){

				console.log(data);
				
			});
		})
		

	*/
}]);