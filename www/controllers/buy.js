app.controller("buy", ["$scope", "property", function($scope, property) {
	

	
	$(document).ready(function() {

		function loadProperties(data) {
			if (data) { 

				// if data from filter exsist
				$scope.values = data;

				if (!data[0]) { 

					// if any property with filter do not exsists
					
					// use {{x.noFind}} for falsy filter
					$scope.values.push({ noFind : "Could not find any property." });
					
				}
			} 
			else {

				// fetch data from db
				$scope.values = property.get(function(data){ console.log(data); });
			}
		}


		$('.btnFilter').on('click', function() {

			if (!$(".justAnInput")[0].value) {
				$(".justAnInput")[0].value = 0;
			}

			property.get( 

				// fetch data from db with filter
				{ $and: [ { price: { $gt : $(".justAnInput")[0].value }}, 
				{ price: { $lt : 1000000 }} /* , add more filter here */ ]}, 
				function(data){

					console.log(data);

					loadProperties(data);
			});
		});

		loadProperties();
	});
}]);