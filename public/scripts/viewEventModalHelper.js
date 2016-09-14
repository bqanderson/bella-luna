angular.module('publicApp').factory('alert', function($uibModal, $http){

  function showEvent(modalData){
    return $uibModal.open({
      templateUrl: '../views/modalViewEvent.html',
      controller: 'ViewEventModalController',
      controllerAs: 'vemc',
      resolve: {
        sendData: function(){
          return modalData
        }
      }
    });
  }

  return {
    showEvent: showEvent
  };

});
