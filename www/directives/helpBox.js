app.directive("helpBox", [function(){

	return{
		templateUrl: 'directives/helpBox.html',
		link: function(scope, elem, attrs) {

			var helperbox = elem.find("#helperbox").dialog({
		      autoOpen: false,
		      show: {
		        effect: "slide",
		        duration: 1000
		      },
		      hide: {
		        effect: "explode",
		        duration: 1000
		      }
		    });
			scope.helper = function() {
			    
			   helperbox.dialog("open");
			};

			scope.$on( "$routeChangeStart", function(event, next, current) {
				helperbox.dialog("close");
			});
		},
		controller: ['$scope', function ($scope){

		}]	
	}
}])
