angular.module('adminApp').controller('EmailListController', function($scope, DataService){

  $scope.data = DataService.data;

});
