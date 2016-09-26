angular.module('adminApp')
  .config(function(calendarConfig) {
    calendarConfig.dateFormatter = 'moment'; // use moment to format dates
    moment.locale('en_US');
    calendarConfig.displayAllMonthEvents = true;
    calendarConfig.allDateFormats.moment.date.time = 'hh:mm a';

    calendarConfig.colorTypes = {
      public: {
        primary: '#1e90ff',
        secondary: '#d1e8ff'
      },
      private: {
        primary: '#FF2D85',
        secondary: '#fae3e3'
      },
      artInRes: {
        primary: '#FFCF2D',
        secondary: '#fdf1ba'
      }
    };
  });
