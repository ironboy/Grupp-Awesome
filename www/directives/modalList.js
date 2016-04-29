app.directive("modalList", [function (){

	return {
		//templateUrl: '/directives/modalList.html',

		controller: ["$scope", "$uibModal", function($scope, $uibModal){

			$scope.openModal = function(fastighet){

				var modalInstance = $uibModal.open({
			      animation: true,
			      templateUrl: '/modals/myModalInstance.html',
			      controller: 'myModalInstance',
			      size: 'lg',
			      resolve: {
			      	fastighet: fastighet
			      }
			      
			    });

			    modalInstance.result.then(function (selectedItem) {
			    	//done (ok)
			      $scope.selected = selectedItem;
			    }, function () {
			    	//fail (cancel)
			      console.log('Modal dismissed at: ' + new Date());
			    });
			}

		}]
	};
}]);