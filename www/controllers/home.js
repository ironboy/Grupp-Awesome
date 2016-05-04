app.controller("home", ["$scope", "homecontent", function($scope, homecontent) {

	function loadhome(data) {
        $scope.homeDatas = data || homecontent.get(function(data) {
            console.log(data);
            }
        );
    }

    loadhome();
	// Added functions for creating dummydata for the property collection (also added property to the controller)
	// Uncomment property.create at the bottom of the page if you wan't to create 24 dummy properties everytime you visit the home-page
/*
	function randomData() {
		function randomMillion() {
			var randomNum = Math.floor((Math.random() * 10000000) + 700000);
			return randomNum;
		}
		function randomLrg() {

			var randomLarge = Math.floor((Math.random() * 10000) + 10000);
			return randomLarge;
		}
		function randomThousand() {
			var randomNum = Math.floor((Math.random() * 1000) + 50);
			return randomNum;
		}
		function randomHundred() {
			var randomNum = Math.floor((Math.random() * 100) + 30);
			return randomNum;
		}
		function randomTen() {
			var randomNum = Math.floor((Math.random() * 10) + 1);
			return randomNum;
		}
		function randomNum(numLow, numHigh) {
			if(numLow === 0) {
				var randomNum = Math.floor((Math.random() * (numHigh + 1) + numLow));
				return randomNum;
			}
			else {
			var randomNum = Math.floor((Math.random() * numHigh) + numLow);
			return randomNum;
			}
		}
		function randomType() {
			var type = ["Apartment", "House"];
			return type[randomNum(0,1)];
		}
		var adresses = ["Ramels väg", "Ernst", "Tessins väg", "Sergels väg", "Romlins väg", "Regementsgatan", "Nobelvägen", "Polvägen", "Limhamnsvägen"];
		var data = {
			adress: adresses[randomTen()],
			zipcode: randomLrg(),
			price: randomMillion(),
			rooms: randomTen(),
			livingarea: randomHundred(),
			propertyType: randomType(),
			description: "Hej",
			yardarea: randomThousand(),
			floors: randomTen(),
			path: "img/objects/villa" + randomNum(1,11) + ".jpg"
		}
		return data;
	}

	var homes = [];
	for (var i = 0; i < 24; i++) {
		homes.push(randomData());

	}

	//property.create(homes);

	property.create(homes);*/


}]);