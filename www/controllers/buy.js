app.controller("buy", ["$scope", "property", function($scope, property) {
	
	$(document).ready(function() {

		function loadProperties(data) {

			// if (data) from filter exist use it on scope or fetch from db
			$scope.values = data || property.get(function(data){console.log(data)});

		}

		$scope.dropdownItems = ["item1", "item2", "item3"];

		$('#btnFilter').on('click', function() {

			property.get( 

				// fetch data from db with filter
				{ $and: [ { price: { $gt : 5 }}, 
				{ price: { $lt : 10000 }} /* , add more filter here */ ]}, 
				function(data){

					console.log(data);

					loadProperties(data);

			});
		});

		loadProperties();

	});
}]);