const userModel = require("../../../database/models/user");
const productModel = require("../../../database/models/product");

module.exports = async function(username){
  const user = await userModel.findOne({username});
  var productList = [];

  for(const productId in user.cart){
    const product = await productModel.findById(productId).exec();
    var totalPrice = "$" + product.price.substring(1) * user.cart[productId].quantity;

    let outOfStock = false;
    if(product.inStock === 0){
      outOfStock = true;
    }
    
    const product1 = {
      _id : product._id,
      name : product.name,
      image : product.image,
      price : product.price,
      totalPrice,
      quantity : user.cart[productId].quantity,
      outOfStock
    }
    
    productList.push(product1);
  }

  return productList;
}