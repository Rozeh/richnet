const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  displayName: String,
  email: String,
  password: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', User);
