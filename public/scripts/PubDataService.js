// This is a Factory type AngularJS Service

angular.module('publicApp').factory('PubDataService', function($http, calendarConfig){
  var data = {};

  // List all events
  function showEvents(){
    $http.get('/showEvents').then(function(res){
      console.log('Events:', res.data);
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

      data.events = res.data;
    }, function(res){
      console.log('Fail', res);
    })
  }
  return {
    data: data,
    showEvents: showEvents
  }

})
