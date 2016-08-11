angular.module('adminApp').controller('AdminEventsController', function($http, moment, alert, calendarConfig, DataService){
  var vm = this;
  vm.data = DataService.data;

  //Angular-Calendar code:
  vm.calendarView = 'month';
  vm.viewDate = new Date();
  var actions = [{
    label: '<i class ="glyphicon glyphicon-pencil"></i>',
    onClick: function(args) {
      alert.show('Edited', args.calendarEvent);
    }
  }, {
    label: '<i class ="glyphicon glyphicon-remove"></i>',
    onClick: function(args) {
      alert.show('Deleted', args.calendarEvent);
    }
  }];

  // Toggle Calendar Event code:
  vm.toggle = function($event, field, event) {
    console.log('Clicked toggle');
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
      console.log("Delete Event", adminEventId);
      $http.delete('/deleteAdminEvent/' + adminEventId).then(function(res){
        console.log(res);
        vm.data.events = res.data;
        DataService.showEvents();
      }, function(res){
        console.log('Fail', res);
      })
    }

    // vm.eventClicked = function(sendData) {
    //   console.log('Clicke Event', sendData);
    //   alert.show(sendData);
    //   // DataService.showEvents();
    // };

  DataService.showEvents();

});
