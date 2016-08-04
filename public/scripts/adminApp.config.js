// 'use strict';

angular.module('adminApp').config(function($routeProvider, $locationProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'views/index.html',
    // controller: 'LoginController'
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
  .when('/admin/emailList', {
    templateUrl: 'views/emailList.html',
    controller: 'EmailListController',
    controllerAs: 'elc'
  })
  .when('/admin/adminGallery', {
    templateUrl: 'views/adminGallery.html',
    controller: 'AdminGalleryController',
    controllerAs: 'agc'
  })

  $locationProvider.html5Mode(true);



})


// var angular = require('angular');
// var moment = require('moment');
//
// angular.module('adminApp').constant('moment', moment);
