var router = require('express').Router();

var AdminEvent = require('../models/adminEvents.js');

router.get('/', function(req, res){
  AdminEvent.find({}, function(err, adminevents){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(adminevents);
    }
  })
});


module.exports = router;
