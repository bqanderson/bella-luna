angular.module('publicApp').controller('RequestAirController', function functionName($http, moment) {
  var vm = this;

  // Popup Calendar code:
  vm.today = function() {
    vm.dt = new Date();
  };
  vm.today();

  vm.clear = function() {
    vm.dt = null;
  };

  vm.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  vm.dateOptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  vm.toggleMin = function() {
    vm.inlineOptions.minDate = vm.inlineOptions.minDate ? null : new Date();
    vm.dateOptions.minDate = vm.inlineOptions.minDate;
  };

  vm.toggleMin();

  vm.open1 = function() {
    console.log('Clicke open1');
    vm.popup1.opened = true;
  };

  vm.open2 = function() {
    console.log('Clicked open2');
    vm.popup2.opened = true;
  };

  vm.setDate = function(year, month, day) {
    vm.dt = new Date(year, month, day);
  };

  vm.formats = ['shortDate'];
  // vm.format = vm.formats[0];
  // vm.altInputFormats = ['M!/d!/yyyy'];

  vm.popup1 = {
    opened: false
  };

  vm.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < vm.events.length; i++) {
        var currentDay = new Date(vm.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return vm.events[i].status;
        }
      }
    }

    return '';
  }

  vm.sendEmail = function(){

    var sendData = {};

    var formStartDate = moment(vm.startDate).format('dddd, MMMM Do YYYY');
    var formEndDate = moment(vm.endDate).format('dddd, MMMM Do YYYY');

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
    sendData.contactMethod = vm.contactMethod;
    sendData.startDate = formStartDate;
    sendData.endDate = formEndDate;
    sendData.intent = vm.intent;

    console.log('Email Info:', sendData);

    $http.post('/sendEmail/requestAIR', sendData).then(function(res){
      console.log(res);
    }, function(res){
      console.log('Failed to email anyone.');
    })
  }

})
