app.directive('carousel', [function() {

  return {
    templateUrl: '/directives/carousel.html',
    controller: ['$scope', '$route', function($scope, $route) {
      var $ = angular.element;

      function getSlideHeight() {
        return $(window).height() - parseInt($('body').css('marginTop'));
      }

      $scope.route = $route;

      // handler for changing background opacity
      
      $scope.$watch('route.current.$$route.originalPath' , function() {

        if($scope.route.current.$$route.originalPath == '/') {
          $('carousel').css('opacity', 1);
        }
        else {
          $('carousel').css('opacity', 0.7);
          
        }
      })
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      var slides = $scope.slides = []
      var currIndex = 0;

      $scope.addSlide = function() {
          slides.push({
            imageStyle: {
              'background-image': 'url(/img/backgrounds/background' + currIndex + '.jpg)',
              height: getSlideHeight()
            },
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex ++
          });         
      };

      // handles resizing of slides
      function resizer() {
        $scope.slides.forEach(function(s) {
          s.imageStyle.height = getSlideHeight();
          console.log(s.imageStyle.height)
        });

        /*
          the non-lazy version would be
          if (!$scope.$$phase) {
            $scope.$apply();
          }
          but hugo is lazy
        */

        !$scope.$$phase && $scope.$apply();
      }

      // handling resize
      $(window).on('resize', resizer);

      $scope.$on('$destroy', function() {
        $(window).off('resize', resizer);
      });



        for (var i = 1; i < 11; ++i) {
          $scope.addSlide();

        }
      
    }]
  };
}]);


