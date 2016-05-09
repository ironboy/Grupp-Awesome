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
          setupPagination(data);
          // setupPagination(data);
        } else {
          property.get(function(data){
            setupPagination(data);
            console.log(data)
          });
        }

      }

      // Starting values for filter
      $scope.filterOption = {
        priceMin: { price: 0 },
        priceMax: { price: 100000000 },
        propertyType: { type: /.*/ }
      };

      // Select options for angular
      $scope.filterOptions = [
        [ // [0] priceMin
          { price: 0, displayPrice: 0 },
          { price: 1000000, displayPrice: "1.000.000" },
          { price: 2500000, displayPrice: "2.500.000" },
          { price: 5000000, displayPrice: "5.000.000" },
          { price: 7500000, displayPrice: "7.500.000" },
          { price: 10000000, displayPrice: "10.000.000" }
        ],
        [ // [1] priceMax
          { price: 2500000, displayPrice: "2.500.000" },
          { price: 5000000, displayPrice: "5.000.000" },
          { price: 7500000, displayPrice: "7.500.000" },
          { price: 10000000, displayPrice: "10.000.000" },
          { price: 15000000, displayPrice: "15.000.000" },
          { price: 50000000, displayPrice: "50.000.000" }
        ],
        [ // [2] type
          { type: "House", name: "Villa" },
          { type: "Apartment", name: "Lägenhet"}
        ]
      ];

      // Filter
      $scope.filter = function(){

        var query = {
            $and: [{
              propertyType: $scope.filterOption.propertyType.type,
              price: { $lte : $scope.filterOption.priceMax.price, $gte : $scope.filterOption.priceMin.price } /* , add more filter here */ 
            }]
          };

        if($scope.sortOption.code !== 0){
          query._sort = {};
          query._sort[$scope.sortOption.type] = $scope.sortOption.code;
        }

        property.get( 

          // fetch data from db with filter
          query,
          function(data){

            console.log(data);

            loadProperties(data);
        });
      }

      $scope.sortOption = { code: 0 };
      $scope.sortOptions = [{ code: 1, type: "price", name: "Pris: Lägsta först" },
                            { code: -1, type: "price", name: "Pris: Högsta först" },
                            { code: 1, type: "livingarea", name: "Bo area: Minsta först" },
                            { code: -1, type: "livingarea", name: "Bo area: Största först" }];

      loadProperties();

    }]
  };
}]);