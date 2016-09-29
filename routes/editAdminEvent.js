var router = require('express').Router();

var AdminEvent = require('../models/adminEvents.js');

router.put('/:id', function(req, res){
  var id = req.params.id;
  var data = req.body;

  AdminEvent.findById(id, function(err, events){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      var title = data.title;
      var eventType = data.eventType;
      var startsAt = data.startsAt;
      var endsAt = data.endsAt;
      var description = data.description;
      var tixLink = data.tixLink;
      var pubToBella = data.pubToBella;
      var pubToFacebook = data.pubToFacebook;
      var pubToAnnette = data.pubToAnnette;
      if(title){
        events.title = title;
      }
      if(eventType){
        events.eventType = eventType;
      }
      if(startsAt){
        events.startsAt = startsAt;
      }
      if(endsAt){
        events.endsAt = endsAt;
      }
      if(description){
        events.description = description;
      }
      if(tixLink){
        events.tixLink = tixLink;
      }
      if(pubToBella){
        events.pubToBella = pubToBella;
      }
      if(pubToFacebook){
        events.pubToFacebook = pubToFacebook;
      }
      if(pubToAnnette){
        events.pubToAnnette = pubToAnnette;
      }
      console.log('Updating event', events);
      events.save(function(err){
        if(err){
          console.log(err);
        }
      })
      console.log('Events List updated');
      res.sendStatus(200);
    }
  })
});

module.exports = router;
