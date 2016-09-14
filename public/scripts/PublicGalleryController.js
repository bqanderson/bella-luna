angular.module('publicApp').controller('PublicGalleryController', function($scope){
  // var vm = this;

  $scope.slides = [
    {image: '../assets/bella_redcouch05.jpg', description: 'Bella Luna: The Gaurdian of The Wolf House.'},
    {image: '../assets/frontdeck03.jpg', description: 'Any given night on the magical front deck.'},
    {image: '../assets/howlsign01.jpg', description: 'Time to howl!'},
    {image: '../assets/masonjarwindow02.jpg', description: 'Mason jar window right off the kitchen.'},
    {image: '../assets/olive02.jpg', description: 'Olive the Great Tree.'},
    {image: '../assets/wolfstatue01.jpg', description: 'One of many wolf statues around the property.'}
  ];

  $scope.currentIndex = 0;

  $scope.setCurrentSlideIndex = function(index) {
    $scope.currentIndex = index;
  };

  $scope.isCurrentSlideIndex = function(index) {
    return $scope.currentIndex === index;
  };

  $scope.prevSlide = function () {
    $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
  };

  $scope.nextSlide = function () {
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
  };


});
