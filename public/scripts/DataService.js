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

  function doSomethingAmazing(){

  }

  return {
    data: data,
    doSomethingAmazing: doSomethingAmazing
  }


})
