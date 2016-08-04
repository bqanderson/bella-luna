angular.module('adminApp')
  .config(function(calendarConfig) {

    calendarConfig.dateFormatter = 'moment'; // use moment to format dates

  });
