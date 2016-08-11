angular.module('adminApp').factory('alert', function($uibModal, $http) {

    function show(_, modalData) {
      return $uibModal.open({
        templateUrl: '../views/modalAdminEvents.html',
        controller: 'EventsModalController',
        controllerAs: 'emc',
        resolve: modalData
      });
    }

    return {
      show: show
    };

  });
