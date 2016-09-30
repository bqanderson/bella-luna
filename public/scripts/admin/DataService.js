angular.module('adminApp').factory('DataService', function($http, calendarConfig){

  var events = {};

    // Create New Event
    function createAdminEvent(eventData){
      $http.post('/createAdminEvent', eventData).then(function(){
        console.log('Event created', eventData);
        showEvents();
      }, function() {
        console.log('Fail!');
      })
    }

    // Update Event
    function updateAdminEvent(eventData){
      $http.put('/editEvent/' + eventData.id, eventData).then(function(res){
        console.log(res);
        console.log('Edit Event', eventData.id);
        showEvents();
      }, function(res){
        console.log('Failure is not accepted!', res);
      })
    }

  //List all events
  function showEvents(){
    $http.get('/showEvents').then(function(res) {
      console.log('Before loop:', res.data);
      for (var i = 0; i < res.data.length; i++) {

        switch (res.data[i].eventType) {
          case 'public':
            res.data[i].color = calendarConfig.colorTypes.public;
          break;
          case 'private':
            res.data[i].color = calendarConfig.colorTypes.private;
          break;
          case 'artInRes':
            res.data[i].color = calendarConfig.colorTypes.artInRes;
          break;
        }
      }
      events.events = res.data;
      console.log('After Loop:', res.data);

    }, function(res){
      console.log('Fail', res);
    })
  }


  return {
    events: events,
    showEvents: showEvents,
    createAdminEvent: createAdminEvent,
    updateAdminEvent: updateAdminEvent
  }

})
