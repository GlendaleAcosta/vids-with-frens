var mongoose = require('mongoose');
var shortid = require('shortid');

var roomSchema = new mongoose.Schema({
    _id: {
      type: String,
      'default': shortid.generate
  },
  creator: String
}, { timestamps: true });

var Room = mongoose.model('Room', roomSchema);

module.exports = Room;