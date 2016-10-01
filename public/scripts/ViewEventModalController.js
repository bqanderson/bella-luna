angular.module('publicApp').controller('ViewEventModalController', function($http, moment, alert, calendarConfig, PubDataService, sendData){
  var vm = this;

  vm.id = sendData._id;
  vm.title = sendData.title;
  vm.eventType = sendData.eventType;
  vm.startsAt = sendData.startsAt;
  vm.endsAt = sendData.endsAt;
  vm.description = sendData.description;
  vm.tixLink = sendData.tixLink;
})
