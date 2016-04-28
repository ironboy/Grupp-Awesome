app.directive('buyBoxes', [function(){

  return {
    templateUrl: '/directives/buyBoxes.html',
    controller: ['$scope', "property", function($scope, property) {
      
      $(document).ready(function() {

        function loadProperties(data) {

          // if data (from filter) exist use it on scope || fetch from db
          $scope.values = data || property.get(function(data){console.log(data)});

        }

        /*$scope.dropdownItems = ["item1", "item2", "item3"];*/

        $('#btnFilter').on('click', function() { // Filter™ v0.1.2

          property.get( 

            // fetch data from db with filter
            { $and: [ { price: { $gt : 0 }}, 
            { price: { $lt : 100000 }} /* , add more filter here */ ]}, 
            function(data){

              console.log(data);

              loadProperties(data);

          });
        });

        loadProperties();

      });
    }]
  };
}]);