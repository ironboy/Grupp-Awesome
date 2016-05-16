/*app.directive("helpBox", [function(){

	return{
		templateUrl:'directives/helpBox.html',
		link: function(scope, elem, attrs) {
			var helper = function(){

				height = 5;
				width = 5;
				t = window.innerHeight - height;
				l = window.innerWidth - width;

				var help = window.open('', '', 'height='+height+', width='+width+', left='+l+', top='+t );
				scope.help;
			}
		}
	}
}])

*/
app.directive("helpBox", [function(){

	return{
		templateUrl: 'directives/helpBox.html',
		link: function(scope, elem, attrs) {

			var helperbox = elem.find("helperbox");
			elem.find( "#helperbox" ).dialog({
		      autoOpen: false,
		      show: {
		        effect: "blind",
		        duration: 1000
		      },
		      hide: {
		        effect: "explode",
		        duration: 1000
		      }
		    });
			scope.helper = function() {
			    

			 	console.log("hej");

			   
			   helperbox.dialog("open");
			};
		},
		controller: ['$scope', function ($scope){

		}]	
	}
}])