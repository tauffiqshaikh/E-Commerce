const getProductsInCart = require("../services/getProductsInCart");

const goToCart = async (req, res) => {
  const products = [];

  var productList = await getProductsInCart(req.session.user);

  res.render("cart.ejs", {user : req.session.user, productList, err:null});
}

module.exports = goToCart;