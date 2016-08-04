angular.module('adminApp').controller('AdminEventsController', function(moment, alert, calendarConfig, DataService){

  var vm = this;

  vm.calendarView = 'month';
  vm.viewDate = new Date();
  var actions = [{
    label: '<i class ="glyphicon glyphicon-pencil"></i>',
    onClick: function(args) {
      alert.show('Edited', args.calendarEvent);
    }
  }, {
    label: '<i class ="glyphicon glyphicon-remove"></i>',
    onClick: function(args) {
      alert.show('Deleted', args.calendarEvent);
    }
  }];
  vm.events = [
    {
      title: 'An event',
      color: calendarConfig.colorTypes.warning,
      startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
      endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
      draggable: true,
      resizable: true,
      actions: actions
    }, {
      title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
      color: calendarConfig.colorTypes.info,
      startsAt: moment().subtract(1, 'day').toDate(),
      endsAt: moment().add(5, 'days').toDate(),
      draggable: true,
      resizable: true,
      actions: actions
    }, {
      title: 'This is a really long event title that occurs on every year',
      color: calendarConfig.colorTypes.important,
      startsAt: moment().startOf('day').add(7, 'hours').toDate(),
      endsAt: moment().startOf('day').add(19, 'hours').toDate(),
      recursOn: 'year',
      draggable: true,
      resizable: true,
      actions: actions
    }
  ];

  vm.isCellOpen = true;

  vm.addEvent = function() {
    vm.events.push({
      title: 'New event',
      startsAt: moment().startOf('day').toDate(),
      endsAt: moment().endOf('day').toDate(),
      color: calendarConfig.colorTypes.important,
      draggable: true,
      resizable: true
    });
  };

  vm.eventClicked = function(event) {
    alert.show('Clicked', event);
  };

  vm.eventEdited = function(event) {
    alert.show('Edited', event);
  };

  vm.eventDeleted = function(event) {
    alert.show('Deleted', event);
  };

  vm.eventTimesChanged = function(event) {
    alert.show('Dropped or resized', event);
  };

  vm.toggle = function($event, field, event) {
    $event.preventDefault();
    $event.stopPropagation();
    event[field] = !event[field];
  };

});
