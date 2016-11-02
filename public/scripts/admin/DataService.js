angular.module('adminApp').factory('DataService', function($http, calendarConfig){

  var publicEventsArray = [];
  var privateEventsArray = [];
  var airEventsArray = [];
  var allEvents = {};
  var publicEvents = {};
  var privateEvents = {};
  var airEvents = {};

    // Create New Event
    function createAdminEvent(eventData){
      $http.post('/createAdminEvent', eventData).then(function(){
        showEvents();
      }, function() {
        console.log('Fail!');
      })
    }

    // Update Event
    function updateAdminEvent(eventData){
      $http.put('/editEvent/' + eventData.id, eventData).then(function(res){
        console.log(res);
        showEvents();
      }, function(res){
        console.log('Failure is not accepted!', res);
      })
    }

  //List all events
  function showEvents(){
    $http.get('/showEvents').then(function(res) {
      publicEventsArray = [];
      privateEventsArray = [];
      airEventsArray = [];
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
        console.log('Test:');

        if (res.data[i].eventType === 'public') {
          publicEventsArray.push(res.data[i])
          console.log('PE Array', publicEventsArray);
        } else if (res.data[i].eventType === 'private') {
          privateEventsArray.push(res.data[i])
        } else if (res.data[i].eventType === 'artInRes') {
          airEventsArray.push(res.data[i])
        }
      }

      allEvents.events = res.data;
      publicEvents.events = publicEventsArray;
      privateEvents.events = privateEventsArray;
      airEvents.events = airEventsArray;

    }, function(res){
      console.log('Fail', res);
    })
  }

  return {
    allEvents: allEvents,
    publicEvents: publicEvents,
    privateEvents: privateEvents,
    airEvents: airEvents,
    showEvents: showEvents,
    createAdminEvent: createAdminEvent,
    updateAdminEvent: updateAdminEvent
  }

})
