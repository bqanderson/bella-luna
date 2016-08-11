var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var guestSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  streetAdd: String,
  secondStreetAdd: String,
  state: String,
  zip: Number,
  emailTo: Boolean
})

var Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
