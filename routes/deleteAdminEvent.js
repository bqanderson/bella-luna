var router = require('express').Router();

var AdminEvent = require('../models/adminEvents.js');

router.delete('/:id', function(req, res){
  var data = req.body;
  var id = req.params.id;


  AdminEvent.findById(id, function(err, adminEvent){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      adminEvent.remove(function(err){
        if(err){
          console.log(err);
        }
      })
      console.log('Event Deleted');
      res.sendStatus(200);
    }
  })
});

module.exports = router;
