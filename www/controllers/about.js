app.controller("about", ["$scope","aboutdb", function($scope, aboutdb) {

    function loadabout(data) {
        $scope.aboutDatas = data || aboutdb.get(function(data) {
            console.log(data);
            }
        );
    }

    loadabout();

}]);