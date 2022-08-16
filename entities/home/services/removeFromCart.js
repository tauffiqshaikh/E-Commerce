const userModel = require("../../../database/models/user");

module.exports = async (username, productId) =>{

  const user = await userModel.findOne({username});
  if(user.cart === null)
    user.cart = {};

  const cartObject = user.cart;


  productQuantity = user.cart[productId].quantity;
  if(productQuantity === 1){
    delete cartObject[productId];
  }
  else
    cartObject[productId] = {quantity : productQuantity - 1};
    
  await userModel.findOneAndUpdate({username}, {
    cart : cartObject
  })

  

 }
 