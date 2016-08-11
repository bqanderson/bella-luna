var router = require('express').Router();

var Guest = require('../models/guest.js');

router.put('/:id', function(req, res){
  var id = req.params.id;
  var data = req.body;

  Guest.findById(id, function(err, guests){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      var firstName = data.firstName;
      var lastName = data.lastName;
      var email = data.email;
      if(firstName){
        guests.firstName = firstName;
      }
      if(lastName){
        guests.lastName = lastName;
      }
      if(email){
        guests.email = email;
      }
      console.log('Updating list', guests);
      guests.save(function(err){
        if(err){
          console.log(err);
        }
      })
      console.log('Guest List updated');
      res.sendStatus(200);
    }
  })
});

module.exports = router;
