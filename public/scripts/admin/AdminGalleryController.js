angular.module('adminApp').controller('AdminGalleryController', function($scope, DataService){

  $scope.data = DataService.data;

});
