var router = require('express').Router();

var AdminEvent = require('../models/adminEvents.js');

router.post('/', function(req, res){
  var data = req.body;

  var createAdminEvent = new AdminEvent({
    title: data.title,
    color: data.color,
    eventType: data.eventType,
    startsAt: data.startsAt,
    endsAt: data.endsAt,
    draggable: data.draggable,
    resizable: data.resizable,
    description: data.description,
    tixLink: data.tixLink,
    pubToBella: data.pubToBella,
    pubToFacebook: data.pubToFacebook,
    pubToAnnette: data.pubToAnnette,
  });

  createAdminEvent.save(function(err){
    if(err){
      console.log('Saving error', err);
    };
  })
  res.sendStatus(200);
});

module.exports = router;
