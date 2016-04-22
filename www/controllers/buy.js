app.controller("buy", ["$scope", "property", function($scope, property) {
	property.get(function(data){

		console.log(data)
		
	})
}]);