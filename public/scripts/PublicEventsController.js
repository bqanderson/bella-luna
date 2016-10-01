angular.module('publicApp').controller('PublicEventsController', function($http, moment, alert, calendarConfig, PubDataService){
  var vm = this;
  vm.events = PubDataService.data;

  //Angular-Calendar
  vm.calendarView = 'month';
  vm.viewDate = new Date();

  // Toggle Calendar Event
  vm.toggle = function($event, field, event) {
    console.log('Clicked toggle');
    $event.preventDefault();
    $event.stopPropagation();
    event[field] = !event[field];
  };

  // Open View Event Modal
  vm.viewEventClicked = function(sendData) {
    alert.showEvent(sendData);
  };

  //Open Suggest Event Modal
  vm.suggestEvent = function(){
    alert.suggestEvent();
  }

  //Open Request Modal
  vm.requestAIR = function(){
    alert.requestAIR();
  }

  PubDataService.showEvents();
})
