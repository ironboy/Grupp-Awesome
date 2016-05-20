app.controller("home", ["$scope", "property", "homedb", "aboutdb", "workers", function($scope, property, homedb, aboutdb, workers) {



    function loadhome(data) {
        $scope.homeDatas = data || homedb.get(function(data) {
            console.log(data);
            }
        );
    }

    loadhome();

    // Dummy data
    property.get({},function(data){if(data.length === 0){addProperties(data);}});
    homedb.get({},function(data){if(data.length === 0){addHome(data);}});
    aboutdb.get({},function(data){if(data.length === 0){/*addAbout(data)*/}});
    workers.get({},function(data){if(data.length === 0){addWorkers(data)}});

	function addProperties(data){
		console.log("No properties found");

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
				price: randomNum(1, 20000000, 7000000),
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
		for (var i = 0; i < 124; i++) {
			homes.push(randomData());

		}

		property.create(homes);
	}

	function addHome(data){
		homedb.create({title: "Välkommen till oss", text: "Lorem ipsum dolor sit amet, arcu nonummy vulputate. Vehicula integer, tellus massa vitae laoreet tellus."});
	}

	function addAbout(data){
		
	}

	function addWorkers(data){
		workers.create(
			{
			    name: "Kalle Kulla",
			    description: "Trevlig kille med riktig kullmage",
			    worktime: 8,
			    age: 43,
			    path: "img/gubbe.jpg",
			    email: "kalle.kulla@dyhrrumson.se",
			    phone: "071-234 56 78"
	  		});
	  	workers.create({
			    name: "Lisa Bulla",
			    description: "Trevlig tjej med riktig kullmage",
			    worktime: 10,
			    age: 33,
			    path: "img/maklare2.jpg",
			    email: "lisa.bulla@dyhrrumson.se",
			    phone: "071-234 56 78"
	  		});
	  	workers.create({
			    name: "Hans Sulla",
			    description: "Trevlig fillur med riktig kullmage",
			    worktime: 2,
			    age: 19,
			    path: "img/maklare3.jpg",
			    email: "hans.sulla@dyhrrumson.se",
			    phone: "071-234 56 78"
	  		});
	}
}]);