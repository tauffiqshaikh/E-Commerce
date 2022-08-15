const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

module.exports = function(){
  return mongoose.connect(uri);
}