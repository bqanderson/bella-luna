//This is a Factory type AngularJS Service

angular.module('adminApp').factory('DataService', function($http){

  var data = {};

  function handleSuccess(response){
    console.log(response);
    data.pets = response.data
  }

  function handleFailure(response){
    console.log('EVERYTHING\'S ON FIRE', response);
  }

  return {
    data: data,
    showEvents: showEvents,
    createAdminEvent: createAdminEvent
  }

  //List all events
  function showEvents(){
    $http.get('/showEvents').then(function(res) {
      console.log(res.data);
      data.events = res.data;
    }, function(res){
      console.log('Fail', res);
    })
  }

  // Create New Event
  function createAdminEvent(eventData){
    $http.post('/createAdminEvent', eventData).then(function(){
      console.log('Event created', eventData);
      showEvents();
    }, function() {
      console.log('Fail!');
    })
  }


})
