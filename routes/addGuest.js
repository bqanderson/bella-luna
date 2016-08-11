var router = require('express').Router();

var Guest = require('../models/guest.js');

router.post('/', function(req, res){
  var data = req.body;

  var addGuest = new Guest({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    streetAdd: data.streetAdd,
    secondStreetAdd: data.secondStreetAdd,
    state: data.state,
    zip: data.zip,
    emailTo: data.emailTo
  });

  addGuest.save(function(err){
    if(err){
      console.log('Saving error', err);
    };
  })
  res.sendStatus(200);
});

module.exports = router;
