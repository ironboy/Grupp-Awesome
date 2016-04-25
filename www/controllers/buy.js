app.controller("buy", ["$scope", "property", function($scope, property) {
	

	
	$(document).ready(function() {

		function loadProperties(data) {
			if (data) {
				$scope.values = data;
			} 
			else {

				$scope.values = property.get(function(data){

					console.log(data);
					
				});
			}
		}








		$('.btnFilter').on('click', function() {

			property.get( 
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