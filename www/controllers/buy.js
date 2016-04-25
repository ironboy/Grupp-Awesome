app.controller("buy", ["$scope", "property", function($scope, property) {
	

	
	$(document).ready(function() {

		function loadProperties(data) {
			if (data) { // if data from filter exsist
				if (data[0]) { // if any property with filter exsist
					$scope.values = data;
				}
				else { // if any property with filter do not exsists
					$scope.values = data;

					// use {{values.noFind}} for falsy filter
					$scope.values.push({ noFind : "Could not find any property." });

					console.log($scope.values.noFind);
				}
			} 
			else {

				// fetch data from db
				$scope.values = property.get(function(data){

					console.log(data);
					
				});
			}
		}


		$('.btnFilter').on('click', function() {

			property.get( // fetcg data from db with filter
				{ $and: [ { price: { $gt : 5 }}, 
				{ price: { $lt : 1000000 }} /* , add more filter here */ ]}, 
				function(data){

					console.log(data);

					loadProperties(data);
			});
		});

		loadProperties();
	});
}]);