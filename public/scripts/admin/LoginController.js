angular.module('adminApp').controller('LoginController', function($http, $location, DataService){
  var vm = this;

  vm.register = function(){

    var sendData = {};

    sendData.username = vm.username;
    sendData.password = vm.password;

    $http.post('/register', sendData).then(function(res){
    }, function(err){
      console.log(err);
    });
  }

  vm.login = function(){
    var sendData = {};

    sendData.username = vm.username;
    sendData.password = vm.password;

    $http.post('/login', sendData).then(function(res){
      $location.path('/admin/adminEvents');
    }, function(err){
      console.log(err);

    });

    vm.username = null;
    vm.password = null;
  }

});
