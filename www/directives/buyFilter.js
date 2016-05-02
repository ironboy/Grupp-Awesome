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

        $scope.initValues = data;
        // if data (from filter) exist use it on scope || fetch from db
        if (data) {
          $scope.initValues = data;
          $scope.sort($scope.initValues);
          // setupPagination(data);
        } else {
          property.get(function(data){
            $scope.initValues = data;
            setupPagination(data);
            console.log(data)
          });
        }

      }

      // Starting values for filter
      $scope.filterOptions = {
        priceMin: 0,
        priceMax: 100000000,
        propertyType: /[A-Z]/
      };

      // Filter
      $scope.filter = function(){
        property.get( 

          // fetch data from db with filter
          {
            propertyType: $scope.filterOptions.propertyType,
            $and: [{
              price: { $lte : $scope.filterOptions.priceMax }
            }],
              price: { $gte : $scope.filterOptions.priceMin } /* , add more filter here */ 
          },
          function(data){

            console.log(data);

            loadProperties(data);

            console.log($scope.filterOptions);
        });
      }

      $scope.sortOption = { code: 0 };
      $scope.sortOptions = [{ code: 1, name: "Pris: Lägsta först" },
                            { code: 2, name: "Pris: Högsta först" }];

      $scope.sort = function(data){

        if($scope.sortOption.code === 1){
          $scope.initValues.sort(function(a, b){return a.price-b.price});
          setupPagination($scope.initValues);
        }
        else if($scope.sortOption.code === 2){
          $scope.initValues.sort(function(a, b){return a.price+b.price});
          setupPagination($scope.initValues);
        }
        else{
          setupPagination($scope.initValues);
        }

      }

      loadProperties();

    }]
  };
}]);