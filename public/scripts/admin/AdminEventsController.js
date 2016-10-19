angular.module('adminApp').controller('AdminEventsController', function($http, moment, alert, calendarConfig, DataService){
  var vm = this;
  vm.events = DataService.events;

  //Angular-Calendar code:
  vm.calendarView = 'month';
  vm.viewDate = new Date();

  // Toggle Calendar Event code:
  vm.toggle = function($event, field, event) {
    $event.preventDefault();
    $event.stopPropagation();
    event[field] = !event[field];
  };

  // Open Edit Event Modal code
  vm.editEventClicked = function(sendData) {
    alert.showEdit(sendData);
  };

  // Open Add Event Modal code
  vm.addEventClicked = function(sendData) {
    alert.showAdd(sendData);
  };

  // Delete Admin Event
  vm.deleteEvent = function(adminEventId) {
    $http.delete('/deleteAdminEvent/' + adminEventId).then(function(res){
      vm.events.events = res.data;
      DataService.showEvents();
    }, function(res){
      console.log('Fail', res);
    })
  }

  DataService.showEvents();

});
