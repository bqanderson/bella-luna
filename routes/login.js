var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.get('/', function(req, res, next){
  res.sendFile(path.resolve(__dirname, '../views/login.html'));
});


router.post('/',
  passport.authenticate('local'), function(req, res) {
    res.sendStatus(200);
});

module.exports = router;
