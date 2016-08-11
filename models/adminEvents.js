var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminEventSchema = new Schema({
  title: String,
  color: String,
  startsAt: Date,
  endsAt: Date,
  draggable: Boolean,
  resizable: Boolean,
  description: String,
  tixLink:  String,
  pubToBella: Boolean,
  pubToFacebook: Boolean,
  pubToAnnette: Boolean
})

var AdminEvent = mongoose.model('AdminEvent', adminEventSchema);

module.exports = AdminEvent;
