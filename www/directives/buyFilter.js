app.directive('buyBoxes', [function(){

  return {
    templateUrl: '/directives/buyBoxes.html',
    controller: ['$scope', "property", function($scope, property) {
      
      function loadProperties(data) {

        // if data (from filter) exist use it on scope || fetch from db
        $scope.values = data || property.get(function(data){console.log(data)});

      }

      $scope.data = {
        priceMin: 0,
        priceMax: 10000000
      };

      // Filter™ v0.1.2
      $scope.filter = function(){
        property.get( 

          // fetch data from db with filter
          { $and: [ { price: { $gt : $scope.data.priceMin }}, 
          { price: { $lt : $scope.data.priceMax }} /* , add more filter here */ ]}, 
          function(data){

            console.log(data);

            loadProperties(data);

            console.log($scope.data);
        });
      }

      loadProperties();

    }]
  };
}]);