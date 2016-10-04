angular.module('publicApp').controller('RequestAirController', function functionName($http) {
  var vm = this;

  vm.sendEmail = function(){

    var sendData = {};

    sendData.subject = vm.emailSubject;
    sendData.message = vm.emailMessage;
    sendData.link = vm.eventLink;

    console.log('Email Info:', sendData);

    $http.post('/sendEmail/suggestEvent', sendData).then(function(res){
      console.log(res);
    }, function(res){
      console.log('Failed to email anyone.');
    })
  }

})
