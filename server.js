var express = require('express');
var mongoose = require('mongoose');
var bodyParser  = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local').Strategy
// var moment = require('moment'); //not sure if I need this here or not

var User = require('./models/user');

var index = require('./routes/index');
var adminRouter = require('./routes/admin');
var register = require('./routes/register');
var login = require('./routes/login');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session( {
  secret: 'bBrain',
  key: 'user',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 1000, secure: false}
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new localStrategy({ passReqToCallback: true, usernameField: 'username' },
  function(req, username, password, done){
    User.findOne({ username: username }, function(err, user){
      if (err) {
        throw err
      };
      if (!user) {
        return done(null, false, {message: 'Incorrect username and password.'});
      }
      // test a matching password
      user.comparePassword(password, function(err, isMatch){
        if (err) {
          throw err;
        }
        if (isMatch) {
          return done(null, user);
        } else {
          done(null, false, {message: 'Incorrect username and password.'});
        }
      });
    });
  })
);

// routes
app.use('/', index);
app.use('/admin', adminRouter);
app.use('/register', register);
app.use('/login', login);

app.get('/', function(req, res, next){
  res.sendFile(path.resolve(__dirname, 'public/views/index.html'));
})

mongoose.connect('mongodb://localhost:27017/bella-luna');

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err,user){
    if(err) {
      return done(err);
    }
    done(null,user);
  });
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("Listening on port", port);
})
