angular.module('adminApp').controller('EventsModalController', function($http, moment, alert, calendarConfig, DataService){
  var vm = this;
  vm.data = DataService.data;

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
    // dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  // function disabled(data) {
  //   var date = data.date,
  //     mode = data.mode;
  //   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  // }

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

  //Add New Event code:
  vm.createAdminEvent = function(){

    var sendData = {};

    sendData.title = vm.title;
    sendData.color = 'red';
    sendData.startsAt = vm.startsAt;
    sendData.endsAt = vm.endsAt;
    sendData.draggable = true;
    sendData.resizable = true;
    sendData.description = vm.description;
    sendData.tixLink = vm.tixLink;
    sendData.pubToBella = vm.pubToBella;
    sendData.pubToFacebook = vm.pubToFacebook;
    sendData.pubToAnnette = vm.pubToAnnette;

    DataService.createAdminEvent(sendData)

    // $http.post('/createAdminEvent', sendData).then(function(){
    //   console.log('Event created', sendData);
    //   DataService.showEvents();
    // }, function() {
    //   console.log('Fail!');
    // })
    vm.title = null;
    vm.startsAt = null;
    vm.endsAt = null;
    vm.description = null;
  }


})
