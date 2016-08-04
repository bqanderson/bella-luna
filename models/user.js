var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var  bcrypt = require('bcrypt');
var  SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

UserSchema.pre('save', function(next){
  var user = this;
  console.log(user);
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }
  // generate a salt
  bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hash){
    if (err) {
      console.log(err);
    } else {
      console.log('Hashed password', hash);
      user.password = hash;
      return next();
    }
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb){
  var user = this;
  bcrypt.compare(candidatePassword, user.password, function(err, isMatch){
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
