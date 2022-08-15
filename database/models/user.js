const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique:true
  },
  email : {
    type: String,
    unique:true
  },
  password: String,
  isVerified : Boolean
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;

