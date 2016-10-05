angular.module('publicApp').controller('RequestAirController', function functionName($http) {
  var vm = this;

  vm.sendEmail = function(){

    var sendData = {};

    sendData.firstName = vm.firstName;
    sendData.lastName = vm.lastName;
    sendData.email = vm.email;
    sendData.address1 = vm.address1;
    if (vm.address2 != undefined) {
      sendData.address2 = vm.address2;
    }
    sendData.city = vm.city;
    sendData.state = vm.state;
    sendData.zip = vm.zip;
    sendData.phone = vm.phone;
    sendData.contatMethod = vm.contatMethod;
    sendData.startDate = vm.startDate;
    sendData.endDate = vm.endDate;
    sendData.intent = vm.intent;

    console.log('Email Info:', sendData);

    $http.post('/sendEmail/suggestEvent', sendData).then(function(res){
      console.log(res);
    }, function(res){
      console.log('Failed to email anyone.');
    })
  }

})
