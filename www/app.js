console.log("Hello world!");

// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

	$routeProvider
	.when("/",{
		templateUrl: "templates/home.html",
		controller: "home"
	})
	.when("/about",{
		templateUrl: "templates/about.html",
		controller: "about"
	})
	.when("/forsale",{
		templateUrl: "templates/forsale.html",
		controller: "forsale"
	})
	.when("/buy",{
		templateUrl: "templates/buy.html",
		controller: "buy"
	})
	.when("/contact",{
		templateUrl: "templates/contact.html",
		controller: "contact"
	})
	.otherwise({
		templateUrl: "templates/home.html"
	});

	$locationProvider.html5Mode(true);
}]);