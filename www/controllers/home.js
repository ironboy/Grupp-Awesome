app.controller("home", ["$scope", "property", function($scope, property) {

	// Added functions for creating dummydata for the property collection (also added property to the controller)
	// Uncomment if you wan't to create 24 dummy properties everytime you visit the home-page

	// function randomData() {
	// 	function randomMillion() {
	// 		var randomNum = Math.floor((Math.random() * 10000000) + 700000);
	// 		return randomNum;
	// 	}
	// 	function randomLrg() {

	// 		var randomLarge = Math.floor((Math.random() * 10000) + 10000);
	// 		return randomLarge;
	// 	}
	// 	function randomThousand() {
	// 		var randomNum = Math.floor((Math.random() * 1000) + 50);
	// 		return randomNum;
	// 	}
	// 	function randomHundred() {
	// 		var randomNum = Math.floor((Math.random() * 100) + 30);
	// 		return randomNum;
	// 	}
	// 	function randomTen() {
	// 		var randomNum = Math.floor((Math.random() * 10) + 1);
	// 		return randomNum;
	// 	}
	// 	function randomNum(numLow, numHigh) {
	// 		if(numLow === 0) {
	// 			var randomNum = Math.floor((Math.random() * (numHigh + 1) + numLow));
	// 			return randomNum;
	// 		}
	// 		else {
	// 		var randomNum = Math.floor((Math.random() * numHigh) + numLow);
	// 		return randomNum;
	// 		}
	// 	}
	// 	function randomType() {
	
	// 		function random01() {
	// 			var randomNum = Math.floor(Math.random() * 2);
	// 			return randomNum;
	// 		}
	// 		var type = ["Apartment", "House"];
	// 		return type[random01()];
	// 	}
	// 	var adresses = ["Ramels väg", "Ernst", "Tessins väg", "Sergels väg", "Romlins väg", "Regementsgatan", "Nobelvägen", "Polvägen", "Limhamnsvägen"];
	// 	var data = {
	// 		adress: adresses[randomTen()],
	// 		zipcode: randomLrg(),
	// 		price: randomMillion(),
	// 		rooms: randomTen(),
	// 		livingarea: randomHundred(),
	// 		propertyType: randomType(),
	// 		description: "Hej",
	// 		yardarea: randomThousand(),
	// 		floors: randomTen(),
	// 		path: "img/objects/villa" + randomNum(1,4) + ".jpg"
	// 	}
	// 	console.log(data.zipcode);
	// 	console.log(data.livingarea);
	// 	return data;
	// }
	// 		console.log("home");

	// var homes = [];
	// for (var i = 0; i < 24; i++) {
	// 	homes.push(randomData());

	// }
	// property.create(homes);
}]);