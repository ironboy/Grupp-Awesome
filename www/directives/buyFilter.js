app.directive('buyFilter', [function(){

  return {
    templateUrl: '/directives/buyFilter.html',
    controller: ['$scope', '$filter', '$route', '$routeParams', '$location', "property", function($scope, $filter, $route, $routeParams, $location, property) {


      function setupPagination(data) {
        var allValues = data;
        $scope.itemsPerPage = $scope.filterOption.itemsPerPage;
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
        priceMin: -10000,
        priceMax: 100000000 ,
        areaMin: -10000,
        areaMax: 10000,
        propertyType: /.*/,
        sortOptionCode: null,
        sortOptionType: null,
        itemsPerPage: 5,
        id: null
      };

      $scope.sortAndTypeData;
      $scope.sortAndType = function(){
        console.log($scope.sortAndTypeData);
        if($scope.sortAndTypeData.code === 0 | -1){
          console.log("Sort");
          $scope.filterOption.sortOptionCode = $scope.sortAndTypeData.code;
          $scope.filterOption.sortOptionType = $scope.sortAndTypeData.type;
          console.log($scope.filterOption);
          $scope.sort();
        }
        else{
          $scope.propertyType = $scope.sortAndTypeData.type;
          $scope.filter();
        }
      }

      // Select options for angular
      // This is just stored data instead of keeping it in the .html
      // It's looped into a <select> with ng-options in .html
      $scope.filterOptions = {
        priceMin: [
          0,
          1000000,
          2500000,
          5000000,
          7500000,
          10000000 
        ],
        priceMax: [
          2500000,
          5000000,
          7500000,
          10000000,
          15000000,
          50000000 
        ],
        areaMin: [
          0,
          25,
          50,
          75,
          100,
          125,
          150 
        ],
        areaMax: [
          25,
          50,
          75,
          100,
          125,
          150,
          200,
          300 
        ],
        itemsPerPage: [
          5,
          10,
          25,
          50
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

      window.lol = $location;

      // Filter
      $scope.filter = function(){

        // Here we create our query as an object
        var query = {

            // $and contains all values that are being compared
            // $lte = less than or equal to - $gte = greater than or equal to
            $and: [{
              propertyType: $scope.filterOption.propertyType,
              price: { $lte : $scope.filterOption.priceMax, $gte : $scope.filterOption.priceMin },
              livingarea: { $lte : $scope.filterOption.areaMax, $gte : $scope.filterOption.areaMin } /* , add more filter here */
            }]
          };

        $location.search($scope.filterOption);

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
                $scope.filterOption.id = null;
                $location.search($scope.filterOption);
              }
            }

            function findProp(prop){
              return prop._id === $route.current.params.id;
            }
        });
      }

      $scope.sort = function(){

        var sortedData = $filter('orderBy')($scope.initValues, $scope.filterOption.sortOptionType, $scope.filterOption.sortOptionCode);

        setupPagination(sortedData);
      }

      $scope.clickModal = function(prop){

        $scope.filterOption.id = prop._id;
        $location.search($scope.filterOption);
        $scope.openModal(prop);
        console.log($route.current);
        console.log("URL",$scope.urlOptions);
      }

      if($route.current.params.priceMin){
        console.log($route.current.params);
      }

      // Init
      $scope.filter();

      $scope.$watch("filterOption", function(newValue,oldValue){
        $location.search($scope.filterOption);
      }, true)

    }]
  };
}]);