'use strict';

angular.module('publicApp').config(function($routeProvider, $locationProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'views/slider.html'
  })
  .when('/about', {
    templateUrl: 'views/about.html'
  })
  .when('/events', {
    templateUrl: 'views/events.html',
    controller: 'PublicEventsController',
    controllerAs: 'pec'
  })
  .when('/artists', {
    templateUrl: 'views/artists.html'
  })
  .when('/press', {
    templateUrl: 'views/press.html'
  })
  .when('/gallery', {
    templateUrl: 'views/gallery.html',
    controller: 'PublicGalleryController',
    controllerAs: 'pgc'
  })
  .when('/guestbook', {
    templateUrl: 'views/guestbook.html',
    controller: 'GuestbookController',
    controllerAs: 'gbc'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'PublicContactController',
    controllerAs: 'pcc'
  })

  $locationProvider.html5Mode(true);

})
