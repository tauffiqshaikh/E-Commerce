const productModel = require("../../../database/models/product");

module.exports =  function()
{
  return productModel.find({});
}