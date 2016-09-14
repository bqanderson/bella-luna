'use strict';

angular.module('adminApp').config(function($routeProvider, $locationProvider){
  $routeProvider

  .when('/admin', {
    templateUrl: 'views/admin/login.html',
    controller: 'LoginController',
    controllerAs: 'lc'
  })
  .when('/admin/adminEvents', {
    templateUrl: 'views/admin/adminEvents.html',
    controller: 'AdminEventsController',
    controllerAs: 'aec'
  })
  .when('/admin/guestList', {
    templateUrl: 'views/admin/guestList.html',
    controller: 'GuestListController',
    controllerAs: 'glc'
  })
  .when('/admin/adminGallery', {
    templateUrl: 'views/admin/adminGallery.html',
    controller: 'AdminGalleryController',
    controllerAs: 'agc'
  })

  $locationProvider.html5Mode(true);

})
