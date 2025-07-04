
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String
  }
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
