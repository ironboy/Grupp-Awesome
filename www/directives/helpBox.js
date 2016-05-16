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
		/*	elem.find(".helperBox");*/
			/*$scope.helperbox = function(){
			    $(".helperbox").helperbox({
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
			 
			    $(".opener").click(function() {
			      $(".helperbox").helperbox("open");
			    });
			}*/