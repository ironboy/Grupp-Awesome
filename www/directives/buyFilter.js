app.directive('buyFilter', [function(){

  return {
    templateUrl: '/directives/buyFilter.html',
    controller: ['$scope', "property", function($scope, property) {


      function setupPagination(data) {
        var allValues = data;
        $scope.itemsPerPage = $scope.filterOption.itemsPerPage.amount;
        console.log($scope.itemsPerPage);
        window.heyoo = $scope;
        window.banan = allValues;
        // total pages
        $scope.totalItems = allValues.length;

        $scope.currentPage = 1;

        $scope.pageChanged = function () {
          var startAt = ($scope.currentPage-1) * $scope.itemsPerPage;
          $scope.values = allValues.slice().splice(startAt, $scope.itemsPerPage);
          console.log("pagination page " + $scope.currentPage + " amount of items on this page " + $scope.values.length);
        };

        $scope.pageChanged();
      }

      // This is where data is stored when an option is selected
      // Data is changed with ng-model in .html
      // We use this data in the the query for filtering
      $scope.filterOption = {
        priceMin: { price: 0 },
        priceMax: { price: 100000000 },
        areaMin: { area: 0 },
        areaMax: { area: 10000},
        propertyType: { type: /.*/ },
        sortOption: { code: 0 },
        itemsPerPage: { amount: 5 }
      };

      // Select options for angular
      // This is just stored data instead of keeping it in the .html
      // It's looped into a <select> with ng-options in .html
      $scope.filterOptions = {
        priceMin: [
          { price: 0 },
          { price: 1000000 },
          { price: 2500000 },
          { price: 5000000 },
          { price: 7500000 },
          { price: 10000000 }
        ],
        priceMax: [
          { price: 2500000 },
          { price: 5000000 },
          { price: 7500000 },
          { price: 10000000 },
          { price: 15000000 },
          { price: 50000000 }
        ],
        type: [
          { type: "House", name: "Villa" },
          { type: "Apartment", name: "Lägenhet"}
        ],
        areaMin: [
          { area: 0 },
          { area: 20 },
          { area: 40 },
          { area: 60 },
          { area: 80 },
          { area: 100 }
        ],
        areaMax: [
          { area: 40 },
          { area: 60 },
          { area: 80 },
          { area: 100 },
          { area: 120 },
          { area: 150 }
        ],
        sortOption: [
          { code: 1, type: "price", name: "Pris: Lägsta först" },
          { code: -1, type: "price", name: "Pris: Högsta först" },
          { code: 1, type: "livingarea", name: "Boarea: Minsta först" },
          { code: -1, type: "livingarea", name: "Boarea: Största först" }
        ],
        itemsPerPage: [
          { amount: 5 },
          { amount: 10 },
          { amount: 25 },
          { amount: 50 }
        ]
      };

      // Filter
      $scope.filter = function(){

        // Here we create our query as an object
        var query = {

            // $and contains all values that are being compared
            // $lte = less than or equal to - $gte = greater than or equal to
            $and: [{
              propertyType: $scope.filterOption.propertyType.type,
              price: { $lte : $scope.filterOption.priceMax.price, $gte : $scope.filterOption.priceMin.price },
              livingarea: { $lte : $scope.filterOption.areaMax.area, $gte : $scope.filterOption.areaMin.area } /* , add more filter here */
            }]
          };

        // If a sort option is selected the code will either be: 1(ascending) or -1(descending)
        // This will be added after the $and in the query
        if($scope.filterOption.sortOption.code !== 0){

          // First create an empty object
          query._sort = {};

          // Second we store out sort option in the object
          // this is taken from $scope.filterOption.sortOption
          // query._sort.type = code
          query._sort[$scope.filterOption.sortOption.type] = $scope.filterOption.sortOption.code;
        }

        // This is our get request to our database
        property.get(

          // Get takes 2 arguments here
          // ( our query , a function which get the data )
          query,
          function(data){

            console.log(data);

            // Send data to make pagination
            setupPagination(data);
        });
      }

      // Init
      $scope.filter();
      
    }]
  };
}]);