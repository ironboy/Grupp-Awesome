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
    workers.get({},function(data){if(data.length === 0){/*addWorkers(data)*/}});

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
		for (var i = 0; i < 124; i++) {
			homes.push(randomData());

		}

		property.create(homes);
	}

	function addHome(data){
		homedb.create({title: "Välkommen till oss", text: "Lorem ipsum dolor sit amet, arcu nonummy vulputate. Vehicula integer, tellus massa vitae laoreet tellus. Eros nam, iure blandit, ipsum ipsum sollicitudin mus augue. Feugiat lectus pretium risus in viverra donec, et tortor mollis accumsan pretium augue, consectetuer vestibulum felis dignissim fermentum ac. Scelerisque nibh justo lectus nec, risus ac, erat pellentesque vel, bibendum pariatur tempor aenean. Repellendus purus amet, ut erat pretium per pellentesque volutpat, leo sapien nunc nibh turpis nec, orci id, mollis adipiscing ligula nobis neque sem. Venenatis morbi, elit a vulputate in quisque in dui, imperdiet dui eget libero, purus nunc risus ut bibendum sed feugiat. Eget at pulvinar, magnis justo non orci inceptos, vel duis vitae vivamus blandit commodo, est augue vitae. Convallis nec enim duis condimentum wisi, vivamus tempus at ipsum rutrum nunc libero, vivamus felis nulla, integer at, magna do velit. Urna metus, fermentum id vestibulum et condimentum. Sapien turpis laoreet, sollicitudin erat lorem molestiae lectus laoreet, non tortor ultrices. Arcu iaculis feugiat, pellentesque donec donec nulla libero ante, mus libero velit nam in, sem bibendum. Adipiscing dis deleniti nibh ac id lobortis, sapien neque orci porttitor, lacus magnis fames ornare. Duis erat amet a rutrum volutpat, dolor aenean habitant wisi pulvinar eget, sit tortor ipsum laborum condimentum curabitur, faucibus dui potenti nunc donec turpis, nisl vulputate arcu lectus. Nulla duis auctor nascetur montes, enim lacus urna eget nonummy, sit arcu, mauris luctus euismod. Quam metus duis sodales malesuada, quisque augue parturient esse vel. Dictum quam."});
	}

	function addAbout(data){
		
	}

	function addWorkers(data){

	}
}]);