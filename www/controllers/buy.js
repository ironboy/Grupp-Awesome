app.controller("buy", ["$scope", "property", function($scope, property) {
	
		/*$scope.values = property.get(function(data){

			console.log(data);				
				
		});*/

	
	$(document).ready(function() {

		function loadProperties(data) {
			if (data) { 

				// if data from filter exsist
				$scope.values = data;

				if (!data[0]) { 

					// if any property with filter do not exsists
				}
			} 
			else {

				// fetch data from db
				$scope.values = property.get(function(data){ console.log(data); });
			}
		}


		$('.btnFilter').on('click', function() {

			property.get( 

				// fetch data from db with filter
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