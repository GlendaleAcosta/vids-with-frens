var mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
  creator: String
}, { timestamps: true });

var Room = mongoose.model('Room', roomSchema);

module.exports = Room;