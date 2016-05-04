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

        property.get( 

          // fetch data from db with filter
          {
            $and: [{
              propertyType: $scope.filterOption.propertyType.type,
              price: { $lte : $scope.filterOption.priceMax.price, $gte : $scope.filterOption.priceMin.price } /* , add more filter here */ 
            }]
          },
          function(data){

            console.log(data);

            loadProperties(data);
        });
      }

      $scope.sortOption = { code: 0 };
      $scope.sortOptions = [{ code: 1, type: "price", name: "Pris: Lägsta först" },
                            { code: 2, type: "price", name: "Pris: Högsta först" },
                            { code: 1, type: "area", name: "Bo area: Minsta först" },
                            { code: 2, type: "area", name: "Bo area: Största först" }];

      $scope.sort = function(){

        var type = $scope.sortOption.type;

        if($scope.sortOption.code){
          if($scope.sortOption.code === 1){
            $scope.initValues.sort(function(a, b){return a[type]-b[type]});
            setupPagination($scope.initValues);
          }
          else{
            $scope.initValues.sort(function(a, b){return a[type]+b[type]});
            setupPagination($scope.initValues);
          }
        }
        else{
          setupPagination($scope.initValues);
        }

      }

      loadProperties();

    }]
  };
}]);