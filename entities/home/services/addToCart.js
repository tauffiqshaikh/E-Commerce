const userModel = require("../../../database/models/user");
const productModel = require("../../../database/models/product");

module.exports = async (username, productId) =>{

  const user = await userModel.findOne({username});
  const product = await productModel.findByIdAndUpdate(productId);
  if(product.inStock === 0){
    return;
  }

  if(user.cart === null)
    user.cart = {};

  const cartObject = user.cart;

  if(user.cart[productId]){
    productQuantity = user.cart[productId].quantity;
    cartObject[productId] = {quantity : productQuantity + 1};
  }
  else
    cartObject[productId] = {quantity : 1}

  await productModel.findByIdAndUpdate(productId, {inStock : product.inStock-1});

  await userModel.findOneAndUpdate({username}, {
    cart : cartObject
  });
 }
 