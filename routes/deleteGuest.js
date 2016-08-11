var router = require('express').Router();

var Guest = require('../models/guest.js');

router.delete('/:id', function(req, res){
  var data = req.body;
  var id = req.params.id;

  Guest.findById(id, function(err, guest){
    console.log(id);
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      guest.remove(function(err){
        if(err){
          console.log(err);
        }
      })
      console.log('Guest Deleted');
      res.sendStatus(200);
    }
  })
});

module.exports = router;
