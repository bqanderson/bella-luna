angular.module('publicApp').controller('PublicEventsController', function($http, moment, alert, calendarConfig, PubDataService){
  var vm = this;
  vm.data = PubDataService.data;

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

  // Open View Event Modal code
  vm.viewEventClicked = function(sendData) {
    alert.showEvent(sendData);
  };

  PubDataService.showEvents();
})
