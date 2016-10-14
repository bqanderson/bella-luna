// This is a Factory type AngularJS Service

angular.module('publicApp').factory('PubDataService', function($http, calendarConfig){
  var allEvents = {};
  var newEvents = {};
  var pastEvents = {};
  var newEventsObject = [];
  var pastEventsObject = [];

  // List all events
  function showEvents(){
    $http.get('/showEvents').then(function(res){
      console.log('Events:', res.data);

      for (var i = 0; i < res.data.length; i++) {

        // add color config to each event
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

        // seperate events into past or upcoming

        // Creating function to compare start date to current date
        Date.prototype.withoutTime = function () {
          var d = new Date(this);
          d.setHours(0, 0, 0, 0, 0);
          return d
        };

        var eventDate = new Date(res.data[i].startsAt)

        if (eventDate.withoutTime() >= new Date().withoutTime()) {
          newEventsObject.push(res.data[i])
        }else {
          pastEventsObject.push(res.data[i])
        }

      }

      console.log('Upcoming Events:', newEventsObject);
      console.log('Past Events:', pastEventsObject);
      console.log('All Events:', res.data);

      allEvents.events = res.data
      newEvents.currentEvents = newEventsObject;
      pastEvents.pastEvents = pastEventsObject;

      console.log('New Events:', newEvents);
      console.log('All Events:', allEvents);

    }, function(res){
      console.log('Fail', res);
    })
  }
  return {
    allEvents: allEvents,
    newEvents: newEvents,
    pastEvents: pastEvents,
    showEvents: showEvents
  }

})
