var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');

router.post('/', function(request, response, next){
  console.log(request.body);
  Users.create(request.body, function(err, post){
    if (err) {
      console.log('Error creating user');
      next(err);
    } else {
      // we registered the user, but thay haven't logged in yet.
      // redirect them to the login page
      console.log('Redirect to success');
      response.redirect('/');
    }
  })
});

module.exports = router;
