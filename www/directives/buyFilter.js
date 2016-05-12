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

      // Starting values for filter
      $scope.filterOption = {
        priceMin: { price: 0 },
        priceMax: { price: 100000000 },
        areaMin: { area: 0 },
        areaMax: { area: 10000},
        propertyType: { type: /.*/ },
        sortOption: { code: 0 }
      };

      // Select options for angular
      $scope.filterOptions = {
        priceMin: [
          { price: 0, displayPrice: 0 },
          { price: 1000000, displayPrice: "1.000.000" },
          { price: 2500000, displayPrice: "2 500.000" },
          { price: 5000000, displayPrice: "5.000.000" },
          { price: 7500000, displayPrice: "7.500.000" },
          { price: 10000000, displayPrice: "10.000.000" }
        ],
        priceMax: [
          { price: 2500000, displayPrice: "2.500.000" },
          { price: 5000000, displayPrice: "5.000.000" },
          { price: 7500000, displayPrice: "7.500.000" },
          { price: 10000000, displayPrice: "10.000.000" },
          { price: 15000000, displayPrice: "15.000.000" },
          { price: 50000000, displayPrice: "50.000.000" }
        ],
        type: [
          { type: "House", name: "Villa" },
          { type: "Apartment", name: "Lägenhet"}
        ],
        areaMin: [
          { area: 0, displayArea: "0 m2" },
          { area: 20, displayArea: "20 m2" },
          { area: 40, displayArea: "40 m2" },
          { area: 60, displayArea: "60 m2" },
          { area: 80, displayArea: "80 m2" },
          { area: 100, displayArea: "100 m2" }
        ],
        areaMax: [
          { area: 40, displayArea: "40 m2" },
          { area: 60, displayArea: "60 m2" },
          { area: 80, displayArea: "80 m2" },
          { area: 100, displayArea: "100 m2" },
          { area: 120, displayArea: "120 m2" },
          { area: 150, displayArea: "150 m2" }
        ],
        sortOption: [
          { code: 1, type: "price", name: "Pris: Lägsta först" },
          { code: -1, type: "price", name: "Pris: Högsta först" },
          { code: 1, type: "livingarea", name: "Bo area: Minsta först" },
          { code: -1, type: "livingarea", name: "Bo area: Största först" }
        ]
      };

      // Filter
      $scope.filter = function(){

        var query = {
            $and: [{
              propertyType: $scope.filterOption.propertyType.type,
              price: { $lte : $scope.filterOption.priceMax.price, $gte : $scope.filterOption.priceMin.price },
              livingarea: { $lte : $scope.filterOption.areaMax.area, $gte : $scope.filterOption.areaMin.area } /* , add more filter here */ 
            }]
          };

        if($scope.filterOption.sortOption.code !== 0){
          query._sort = {};
          query._sort[$scope.filterOption.sortOption.type] = $scope.filterOption.sortOption.code;
        }

        console.log(query);

        property.get( 

          // fetch data from db with filter
          query,
          function(data){

            console.log(data);

            setupPagination(data);
        });
      }
      
      $scope.filter();

    }]
  };
}]);