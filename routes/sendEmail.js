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

module.exports = router;
