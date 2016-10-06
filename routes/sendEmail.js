var router = require('express').Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var Guest = require('../models/guest.js');

router.post('/', function(req, res){
  var data = req.body;

  console.log('Data sent:', data);

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: process.env.username,
      pass: process.env.password
    }
  }));
  var mailOptions = {
    from: '"Bella Luna Studios at The Wolf House NE" <info.bellalunastudios@gmail.com>',
    to: data.emailList,
    subject: data.subject,
    text: data.message + '\n\n' + data.link
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log('There was an error', error);
      res.sendStatus(500);
    } else {
      console.log('Message Sent', info.response);
      res.sendStatus(200);
    }
  });
});

router.post('/requestAIR', function(req, res){
  var data = req.body;

  console.log('Data sent:', data);

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: process.env.username,
      pass: process.env.password
    }
  }));
  var mailOptions = {
    from: '"Bella Luna Studios at The Wolf House NE" <info.bellalunastudios@gmail.com>',
    to: '"Annette Schiebout" <aschiebout@hotmail.com>, "Brian: iCloud" <bqanderson@me.com>',
    cc: '"Brian: gmail" <b.quinn.anderson@gmail.com',
    subject: 'Artist in Residency Request',
    text: 'Artist Name: ' + data.firstName + ' ' + data.lastName + '\n\n' +
          'Email: ' + data.email + '\n\n' +
          'Phone Number: ' + data.phone + '\n\n' +
          'Address: ' + data.address1 + ', ' + data.address2 + '\n\n' +
          'City, State, Zip: ' + data.city + ', ' + data.state + ' ' + data.zip + '\n\n' +
          'Preferred Method of Contact: ' + data.contactMethod + '\n\n' +
          'Residency Intent: ' + data.intent + '\n\n' +
          'Start Data: ' + data.startDate + '\n\n' +
          'End Date ' + data.endDate
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log('There was an error', error);
      res.sendStatus(500);
    } else {
      console.log('Message Sent', info.response);
      res.sendStatus(200);
    }
  });
});

router.post('/suggestEvent', function(req, res){
  var data = req.body;

  console.log('Data sent:', data);

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: process.env.username,
      pass: process.env.password
    }
  }));
  var mailOptions = {
    from: '"Bella Luna Studios at The Wolf House NE" <info.bellalunastudios@gmail.com>',
    to: '"Annette Schiebout" <aschiebout@hotmail.com>, "Brian: iCloud" <bqanderson@me.com>',
    cc: '"Brian: gmail" <b.quinn.anderson@gmail.com',
    subject: 'Suggested Event: ' + data.eventTitle,
    text: 'Contact Name: ' + data.firstName + ' ' + data.lastName + '\n\n' +
          'Email: ' + data.email + '\n\n' +
          'Phone Number: ' + data.phone + '\n\n' +
          'Preferred Method of Contact: ' + data.contactMethod + '\n\n' +
          'Event Title: ' + data.eventTitle + '\n\n' +
          'Event Description: ' + data.eventDescription + '\n\n' +
          'Event Date ' + data.date

  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log('There was an error', error);
      res.sendStatus(500);
    } else {
      console.log('Message Sent', info.response);
      res.sendStatus(200);
    }
  });
});

module.exports = router;
