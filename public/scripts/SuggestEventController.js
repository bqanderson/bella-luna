angular.module('publicApp').controller('SuggestEventController', function functionName($http) {
  var vm = this;

  vm.sendEmail = function(){

    var sendData = {};

    sendData.firstName = vm.firstName;
    sendData.lastName = vm.lastName;
    sendData.email = vm.email;
    sendData.phone = vm.phone;
    sendData.contactMethod = vm.contactMethod;
    sendData.eventTitle = vm.eventTitle;
    sendData.eventDescription = vm.eventDescription;
    sendData.performers = vm.performers;
    sendData.date = vm.date;

    console.log('Email Info:', sendData);

    $http.post('/sendEmail/suggestEvent', sendData).then(function(res){
      console.log(res);
    }, function(res){
      console.log('Failed to email anyone.');
    })
  }

})
