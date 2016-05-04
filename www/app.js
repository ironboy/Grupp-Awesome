

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
	.when("/broker",{
		templateUrl: "templates/broker.html",
		controller: "broker"
	})
	.when("/buy",{
		templateUrl: "templates/buy.html"
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