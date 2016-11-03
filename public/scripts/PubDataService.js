// This is a Factory type AngularJS Service

angular.module('publicApp').factory('PubDataService', function($http, calendarConfig){
  var allEvents = {};
  var newEvents = {};
  var pastEvents = {};
  var newEventArray = [];
  var pastEventArray = [];
  var noEvent = {
    title: 'Please Check Back Soon',
    description: 'We are currently looking for new and exciting events to host. Please continue to check back frequently.'
  }

  // List all events
  function showEvents(){
    $http.get('/showEvents').then(function(res){
      newEventArray = [];
      pastEventArray = [];

      for (var i = 0; i < res.data.length; i++) {
        // add color config to each event
        switch (res.data[i].eventType) {
          case 'public':
            res.data[i].color = calendarConfig.colorTypes.public;
          break;
          case 'private':
            res.data[i].color = calendarConfig.colorTypes.private;
            res.data[i].title = 'Private Event'
          break;
          case 'artInRes':
            res.data[i].color = calendarConfig.colorTypes.artInRes;
            res.data[i].title = 'Artist in Residency'
          break;
        }

        // seperate events into past or upcoming
        if (res.data[i].pubToBella) {
          // Creating function to compare start date to current date
          Date.prototype.withoutTime = function () {
            var d = new Date(this);
            d.setHours(0, 0, 0, 0, 0);
            return d
          };

          var eventDate = new Date(res.data[i].startsAt)

          if (eventDate.withoutTime() >= new Date().withoutTime()) {
            newEventArray.push(res.data[i])
          } else {
            pastEventArray.push(res.data[i])
          }
        }
      }


      if (newEventArray.length === 0) {
        newEventArray.push(noEvent)
      }

      allEvents.events = res.data
      newEvents.currentEvents = newEventArray;
      pastEvents.pastEvents = pastEventArray;

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
