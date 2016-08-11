angular.module('adminApp').factory('alert', function($uibModal, $http) {

    function showEdit(modalData) {
      return $uibModal.open({
        templateUrl: '../views/modalEditAdminEvents.html',
        controller: 'EditedEventsModalController',
        controllerAs: 'eemc',
        resolve: {
          sendData: function() {
            return modalData
          }
        }});
    }

    function showAdd(modalData) {
      return $uibModal.open({
        templateUrl: '../views/modalAddAdminEvents.html',
        controller: 'AddEventsModalController',
        controllerAs: 'aemc',
        resolve: {
          sendData: function() {
            return modalData
          }
        }});
    }

    return {
      showEdit: showEdit,
      showAdd: showAdd
    };

  });
