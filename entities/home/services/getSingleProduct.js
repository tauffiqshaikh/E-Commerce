const productModel = require("../../../database/models/product");
var { ObjectId} = require('mongodb');

module.exports =  function(id)
{
  return productModel.findOne({_id : new ObjectId(id)});
}