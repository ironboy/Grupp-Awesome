app.controller("home", ["$scope", "property", function($scope, property) {

/*	function loadhome(data) {
        $scope.homeDatas = data || homecontent.get(function(data) {
            console.log(data);
            }
        );
    }

    loadhome();*/
	// Added functions for creating dummydata for the property collection (also added property to the controller)
	// Uncomment property.create at the bottom of the page if you wan't to create 24 dummy properties everytime you visit the home-page

	function randomData() {

		function randomNum(numLow, numHigh, startValue) {
			if(!startValue) {
				startValue = 0;
			}

			if(numLow === 0) {
				var randomNum = Math.floor((Math.random() * (numHigh + 1) + numLow)) + startValue;
				return randomNum;
			}
			else {
			var randomNum = Math.floor((Math.random() * numHigh) + numLow) + startValue;
			return randomNum;
			}

		}
		function randomType() {
			var type = ["Apartment", "House"];
			return type[randomNum(0,1)];
		}
		var adresses = ["Ramels väg", "Ernst", "Tessins väg", "Sergels väg", "Romlins väg", "Regementsgatan", "Nobelvägen", "Polvägen", "Limhamnsvägen"];
		var data = {
			adress: adresses[randomNum(0, 10)],
			zipcode: randomNum(1, 10000, 10000),
			price: randomNum(1, 1000000, 700000),
			rooms: randomNum(1,10),
			livingarea: randomNum(1, 100, 30),
			propertyType: randomType(),
			description: "Hej",
			yardarea: randomNum(1, 1000, 50),
			floors: randomNum(1, 10),
			path: "img/objects/villa" + randomNum(1,11) + ".jpg"
		}
		return data;
	}

	var homes = [];
	for (var i = 0; i < 24; i++) {
		homes.push(randomData());

	}

	/*property.create(homes);*/
}]);