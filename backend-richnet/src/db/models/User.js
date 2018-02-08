const mongoose = require('mongoose');
const { Schema } = mongoose;
const token = require('lib/token');

const User = new Schema({
  displayName: String,
  email: String,
  password: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

User.statics.findByEmail = function(email) {
  return this.findOne({email}).exec();
};

User.methods.validatePassword = function(password) {
  const hashed = password;
  return this.password === hashed;
};

User.statics.findByDisplayName = function(displayName) {
  return this.findOne({displayName}).exec();
};

User.statics.findExistancy = function({email, displayName}) {
  return this.findOne({
    $or: [
      {email},
      {displayName}
    ]
  }).exec();
};

User.statics.localRegister = async function({ displayName, email, password, initial }) {
  const user = new this({
    displayName, 
    email,
    password
  });
  return user.save();
}

User.methods.generateToken = function() {
  const { _id, displayName } = this;
  return token.generateToken({
    user: {
      _id,
      displayName
    }
  }, 'user');
};

module.exports = mongoose.model('User', User);
