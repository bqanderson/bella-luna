var router = require('express').Router();

var Guest = require('../models/guest.js');

router.get('/', function(req, res){
  Guest.find({}, function(err, guests){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(guests);
    }
  })
});


module.exports = router;
