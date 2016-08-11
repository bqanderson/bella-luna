// 'use strict';

angular.module('adminApp').config(function($routeProvider, $locationProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'views/index.html',
    // controller: 'LoginController'
  })
  .when('/about', {
    templateUrl: 'views/about.html'
  })
  .when('/events', {
    templateUrl: 'views/events.html',
    // controller: 'PublicEventsController',
    // controllerAs: 'pec'
  })
  .when('/artists', {
    templateUrl: 'views/artists.html'
  })
  .when('/press', {
    templateUrl: 'views/press.html'
  })
  .when('/gallery', {
    templateUrl: 'views/gallery.html'
  })
  .when('/admin', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'lc'
  })
  .when('/admin/adminEvents', {
    templateUrl: 'views/adminEvents.html',
    controller: 'AdminEventsController',
    controllerAs: 'aec'
  })
  .when('/admin/guestList', {
    templateUrl: 'views/guestList.html',
    controller: 'GuestListController',
    controllerAs: 'glc'
  })
  .when('/admin/adminGallery', {
    templateUrl: 'views/adminGallery.html',
    controller: 'AdminGalleryController',
    controllerAs: 'agc'
  })

  $locationProvider.html5Mode(true);

})
