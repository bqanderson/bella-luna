angular.module('publicApp')
  .controller('PublicEventsController',
  function($http, $window, moment, alert, calendarConfig, PubDataService){
    var vm = this;
    vm.allEvents = PubDataService.allEvents;
    vm.upcomingEvents = PubDataService.newEvents;
    vm.pastEvents = PubDataService.pastEvents;

    //Angular-Calendar
    vm.calendarView = 'month';
    vm.viewDate = new Date();

    // Toggle Calendar Event
    vm.toggle = function($event, field, event) {
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

    // Redirect to Airbnb
    vm.redirectToAirbnb = function(){
      $window.open('https://www.airbnb.com/rooms/10544685?eluid=0&euid=c970897f-59ee-4f22-b90f-38c83bae4ce1&s=22&user_id=3527145');
    }

    PubDataService.showEvents();
  })
