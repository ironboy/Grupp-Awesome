app.directive('buyFilter', [function(){

  return {
    templateUrl: '/directives/buyFilter.html',
    controller: ['$scope', "property", function($scope, property) {


      function setupPagination(data) {
        var allValues = data,
            itemsPerPage = 10;
        window.heyoo = $scope;
        window.banan = allValues;
        // total pages
        $scope.totalItems = allValues.length;
        console.log(allValues.length);
        $scope.numPages = Math.ceil((allValues.length/itemsPerPage));

        $scope.currentPage = 1;

        $scope.pageChanged = function () {
          var startAt = ($scope.currentPage-1) * itemsPerPage;
          $scope.values = allValues.slice().splice(startAt, itemsPerPage);
          console.log("pagination page " + $scope.currentPage + " amount of items on this page " + $scope.values.length);
        };

        $scope.pageChanged();
      }
      
      function loadProperties(data) {

        // if data (from filter) exist use it on scope || fetch from db
        if (data) {
          //setupPagination(data);
        } else {
          property.get(function(data){
            setupPagination(data);
            console.log(data)
          });
        }

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