angular.module('publicApp')
  .config(function(calendarConfig) {
    calendarConfig.dateFormatter = 'moment'; // use moment to format dates
  });
