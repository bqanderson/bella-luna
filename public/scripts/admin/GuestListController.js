angular.module('adminApp').controller('GuestListController', function($http, DataService){

  var vm = this;

    vm.showGuest = function(){
      $http.get('/showGuest').then(function(res) {
        vm.guests = res.data;
      }, function(res){
        console.log('Fail', res);
      })
    }

  // Add Guest code
  vm.addGuest = function(){
    console.log('Add Guest Clicked');
    var sendData = {};

    sendData.firstName = vm.firstName,
    sendData.lastName = vm.lastName,
    sendData.email = vm.email,
    sendData.emailTo = false;

    $http.post('/addGuest', sendData).then(function(){
      console.log('Guest Added', sendData);
    }, function(){
      console.log('Fail');
    })

    vm.firstName = null;
    vm.lastName = null;
    vm.email = null;
    vm.showGuest();

  }

  vm.deleteGuest = function(index){
    var id = vm.guests[index]._id;

    console.log('Delete Guest', id);
    $http.delete('/deleteGuest/' + id).then(function(res){
      console.log(res);
      vm.guests = res.data;
      vm.showGuest();
    }, function(res){
      console.log('Fail', res);
    })
  }

  // Edit each item
  vm.showEditor = function(index){
    var toggle;
    if(vm.guests[index].clicked){
      toggle = false;
    } else {
      toggle = true;
    }
    for (var i = 0; i < vm.guests.length; i++) {
      vm.guests[i].clicked = false;
    }
    vm.guests[index].clicked = toggle;
    vm.updateFirstName = vm.guests[index].firstName;
    vm.updateLastName = vm.guests[index].lastName;
    vm.updateEmail = vm.guests[index].email;
    vm.updateEmailTo = vm.guests[index].emailTo;
  }

  // Update Guest on Guest List
  vm.updateGuests = function(index){

      vm.guests[index].clicked = false;
      var id = vm.guests[index]._id;

      var sendData = {};

      sendData.firstName = vm.updateFirstName;
      sendData.lastName = vm.updateLastName;
      sendData.email = vm.updateEmail;

    $http.put('/editGuest/' + id, sendData).then(function(res){
      console.log(res);
      console.log('Edit Guest', id);
      vm.showGuest();
      vm.updateFirstName = null;
      vm.updateLastName = null;
      vm.updateEmail = null;

    }, function(res){
      console.log('Failure is not accepted!', res);
    })
  }

  // Send Email to selected guests
  vm.sendEmail = function(){
    vm.emailList = [];

    for (var i = 0; i < vm.guests.length; i++) {
      if (vm.guests[i].emailTo == true) {
        vm.emailList.push(vm.guests[i].email);
      }
    }

    var sendData = {};

    sendData.emailList = vm.emailList;
    sendData.subject = vm.emailSubject;
    sendData.message = vm.emailMessage;
    sendData.link = vm.eventLink;

    console.log('Email Info:', sendData);

    $http.post('/sendEmail', sendData).then(function(res){
      console.log(res);
    }, function(res){
      console.log('Failed to email anyone.');
    })
  }

  vm.showGuest();

});
