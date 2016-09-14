// This is a Factory type AngularJS Service

angular.module('publicApp').factory('PubDataService', function($http){
  var data = {};

  function handleSuccess(res){
    console.log(res);
    data.events = response.data
  }

  function handleFailure(res){
    console.log('EVERYTHING\'S ON FIRE', res);
  }

  // List all events
  function showEvents(){
    $http.get('/showEvents').then(function(res){
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
