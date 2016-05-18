app.directive('buyFilter', [function(){

  return {
    templateUrl: '/directives/buyFilter.html',
    controller: ['$scope', '$filter', '$route', '$routeParams', '$location', "property", function($scope, $filter, $route, $routeParams, $location, property) {


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
        areaMin: [
          { area: 0 },
          { area: 25 },
          { area: 50 },
          { area: 75 },
          { area: 100 },
          { area: 125 },
          { area: 150 }
        ],
        areaMax: [
          { area: 25 },
          { area: 50 },
          { area: 75 },
          { area: 100 },
          { area: 125 },
          { area: 150 },
          { area: 200 },
          { area: 300 }
        ],
        itemsPerPage: [
          { amount: 5 },
          { amount: 10 },
          { amount: 25 },
          { amount: 50 }
        ],
        type: [
          { type: "House", name: "Villa" },
          { type: "Apartment", name: "Lägenhet"}
        ],
        sortOption: [
          { code: 0, type: "price", name: "Pris: Lägsta först" },
          { code: -1, type: "price", name: "Pris: Högsta först" },
          { code: 0, type: "livingarea", name: "Boarea: Minsta först" },
          { code: -1, type: "livingarea", name: "Boarea: Största först" }
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

        // This is our get request to our database
        property.get(

          // Get takes 2 arguments here
          // ( our query , a function which get the data )
          query,
          function(data){

            console.log(data);

            $scope.initValues = data;

            // Send data to make pagination
            setupPagination(data);

            if($route.current.params.id){
              if($scope.initValues.find(findProp)){
                $scope.openModal($scope.initValues.find(findProp));
              }
              else{
                $location.search("");
              }
            }

            function findProp(prop){
              return prop._id === $route.current.params.id;
            }
        });
      }

      $scope.sort = function(){

        var sortedData = $filter('orderBy')($scope.initValues, $scope.filterOption.sortOption.type, $scope.filterOption.sortOption.code);

        setupPagination(sortedData);
      }

      $scope.clickModal = function(prop){

        $location.search({ id: prop._id });
        $scope.openModal(prop);
        console.log($route.current);
      }

      // Init
      $scope.filter();

      console.log($location);
      console.log($routeParams);

    }]
  };
}]);