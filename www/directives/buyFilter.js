app.directive('buyFilter', [function(){

  return {
    templateUrl: '/directives/buyFilter.html',
    controller: ['$scope', '$filter', '$route', '$routeParams', '$location', "property", function($scope, $filter, $route, $routeParams, $location, property) {

      // Pagination function
      // Uses different elements in buy.html in our $scope
      function setupPagination(data) {

        // Total items shown per page
        $scope.itemsPerPage = $scope.filterOption.itemsPerPage;

        // Total amount of items
        $scope.totalItems = data.length;

        // 
        $scope.pageChanged = function () {
          var startAt = ($scope.filterOption.currentPage-1) * $scope.itemsPerPage;
          $scope.values = data.slice().splice(startAt, $scope.itemsPerPage);
          console.log("pagination page " + $scope.filterOption.currentPage + " amount of items on this page " + $scope.values.length);
        };

        $scope.pageChanged();
      }

      // This is where data is stored when an option is selected
      // Data is changed with ng-model in .html
      // We use this data in the the query for filtering and URL
      $scope.filterOption = {
        priceMin: -10000,
        priceMax: 100000000 ,
        areaMin: -10000,
        areaMax: 10000,

        // Property type House/Apartment
        propertyType: /.*/,

        // Sorting options
        sortOptionCode: null,
        sortOptionType: null,

        // Propert id
        id: null,

        // Pagination options
        itemsPerPage: 5,
        currentPage: 1
      };

      // Function to only get needed values into$scope.filterOption
      $scope.typeData = {};
      $scope.typeCheck = function(){
        if($scope.typeData.type === "price" | "livingarea"){
          $scope.filterOption.sortOptionCode = $scope.typeData.code;
          $scope.filterOption.sortOptionType = $scope.typeData.type;
          $scope.sort();
        }
        else{
          $scope.filterOption.propertyType = $scope.typeData.type;
          $scope.filter();
        }
        $scope.typeData = {};
      }

      // Select options for angular
      // This is just stored data instead of keeping it in the .html
      // It's looped into a <select> with ng-options in .html
      $scope.filterOptions = {
        priceMin: [0,1000000,2500000,5000000,7500000,10000000],
        priceMax: [2500000,5000000,7500000,10000000,15000000,50000000],
        areaMin: [0,25,50,75,100,125,150],
        areaMax: [25,50,75,100,125,150,200,300],
        itemsPerPage: [5,10,25,50],

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
              propertyType: $scope.filterOption.propertyType,
              price: { $lte : $scope.filterOption.priceMax, $gte : $scope.filterOption.priceMin },
              livingarea: { $lte : $scope.filterOption.areaMax, $gte : $scope.filterOption.areaMin } /* , add more filter here */
            }]
          };

        // This is our get request to our database
        property.get(

          // Get takes 2 arguments here
          // ( our query , a function which get the data )
          query,
          function(data){

            console.log(data);

            // Stored values for sorting on frontend
            $scope.initValues = data;

            // Send data to make pagination
            // This is also done if a modal is opened
            setupPagination(data);

            // Checks if our id in URL is an existing id
            if($route.current.params.id){
              if($scope.initValues.find(findProp)){
                $scope.openModal($scope.initValues.find(findProp));
              }
              else{
                $scope.filterOption.id = null;
              }
            }

            function findProp(prop){
              return prop._id === $route.current.params.id;
            }
        });
      }

      // Our sort funtion
      // Uses angular $filter with orderBy to sort data on frontend
      $scope.sort = function(){
        var sortedData = $filter('orderBy')($scope.initValues, $scope.filterOption.sortOptionType, $scope.filterOption.sortOptionCode);
        setupPagination(sortedData);
      }

      // Opens a modal for property
      $scope.initModal = function(prop){
        // Get id from modal to input in URL
        $scope.filterOption.id = prop._id;

        // Open modal
        $scope.openModal(prop);
      }

      // Checks if a URL exist / bugged propertyType is always NaN
      if($route.current.params.priceMax){
        console.log("Params",$route.current.params);
        $scope.filterOption = $route.current.params;
        console.log("Before parseInt",$scope.filterOption);

        for (var key in $scope.filterOption) {
          if ($scope.filterOption.hasOwnProperty(key)) {
            if(typeof $scope.filterOption[key] === 'string') {
              $scope.filterOption[key] = parseInt($scope.filterOption[key]);
            }
          }
        }

        console.log("After parseInt",$scope.filterOption);

        if(!$scope.filterOption.propertyType) {
          $scope.filterOption.propertyType = /.*/;
        }

        console.log("After propertyType check",$scope.filterOption);
      }

      // Init all data
      $scope.filter();

      // A $watch to find changes in $scope.filterOptions and update out URL
      $scope.$watch("filterOption", function(newValue,oldValue){
        $location.search($scope.filterOption);
      }, true)

    }]
  };
}]);