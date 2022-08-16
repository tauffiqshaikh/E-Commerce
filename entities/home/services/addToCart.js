const userModel = require("../../../database/models/user");

module.exports = async (username, productId) =>{

  const user = await userModel.findOne({username});
  if(user.cart === null)
    user.cart = {};

  const cartObject = user.cart;

  if(user.cart[productId]){
    productQuantity = user.cart[productId].quantity;
    cartObject[productId] = {quantity : productQuantity + 1};
    await userModel.findOneAndUpdate({username}, {
      cart : cartObject
    })

    return;
  }
  cartObject[productId] = {quantity : 1}

  await userModel.findOneAndUpdate({username}, {
    cart : cartObject
  });
 }
 