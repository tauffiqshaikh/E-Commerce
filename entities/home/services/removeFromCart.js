const userModel = require("../../../database/models/user");
const productModel = require("../../../database/models/product");

module.exports = async (username, productId, removeAll) =>{

  const user = await userModel.findOne({username});
  const product = await productModel.findById(productId);

  if(user.cart === null)
    user.cart = {};

  const cartObject = user.cart;

  const productQuantity = user.cart[productId].quantity;
  if(removeAll || productQuantity === 1){
    delete cartObject[productId];
  }
  else
    cartObject[productId] = {quantity : productQuantity - 1};

  await productModel.findByIdAndUpdate(productId, {inStock : product.inStock + (user.cart[productId] ? 1 : productQuantity)});
  await userModel.findOneAndUpdate({username}, {
    cart : cartObject
  })

  

 }
 