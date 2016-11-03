angular.module('adminApp').controller('EditedEventsModalController', function($http, moment, alert, calendarConfig, DataService, sendData){
  var vm = this;

  vm.id = sendData._id;
  vm.title = sendData.title;
  vm.color = sendData.color;
  vm.eventType = sendData.eventType;
  vm.startsAt = sendData.startsAt;
  vm.endsAt = sendData.endsAt;
  vm.description = sendData.description;
  vm.tixLink = sendData.tixLink;
  vm.fbLink = sendData.fbLink;
  vm.pubToBella = sendData.pubToBella;
  vm.pubToFacebook = sendData.pubToFacebook;
  vm.pubToAnnette = sendData.pubToAnnette;

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
    vm.popup1.opened = true;
  };

  vm.open2 = function() {
    vm.popup2.opened = true;
  };

  vm.setDate = function(year, month, day) {
    vm.dt = new Date(year, month, day);
  };

  vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  vm.format = vm.formats[0];
  vm.altInputFormats = ['M!/d!/yyyy'];

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
  vm.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

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

  //Update Event code:
  vm.updateAdminEvent = function(){

    var sendData = {};

    sendData.id = vm.id;
    sendData.title = vm.title;
    sendData.eventType = vm.eventType;
    sendData.startsAt = vm.startsAt;
    sendData.endsAt = vm.endsAt;
    sendData.description = vm.description;
    sendData.tixLink = vm.tixLink;
    sendData.fbLink = vm.fbLink;
    sendData.pubToBella = vm.pubToBella;
    sendData.pubToFacebook = vm.pubToFacebook;
    sendData.pubToAnnette = vm.pubToAnnette;

    DataService.updateAdminEvent(sendData)
  }

})
