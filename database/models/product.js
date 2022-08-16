const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image : String,
  price: String,
  details : String,
  inStock : Number
});

const productModel = mongoose.model('products', userSchema);

module.exports = productModel;

