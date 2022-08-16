const getProductsInCart = require("../services/getProductsInCart");

const goToCart = async (req, res) => {
  const products = [];

  var productList = await getProductsInCart(req.session.user);

  // console.log(productList)
  res.render("cart.ejs", {user : req.session.user, productList : productList});
}

module.exports = goToCart;