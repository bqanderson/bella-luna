angular.module('publicApp').factory('alert', function($uibModal, $http){

  function showEvent(modalData){
    console.log('Modal Data:', modalData.eventType);
    var tempUrl;

    switch (modalData.eventType) {
      case 'public':
        tempUrl = '../views/modalPubEvent.html';
      break;
      case 'private':
        tempUrl = '../views/modalPrivateEvent.html';
      break;
      case 'artInRes':
        tempUrl = '../views/modalArtInRes.html';
      break;
    }

    return $uibModal.open({
      templateUrl: tempUrl,
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
