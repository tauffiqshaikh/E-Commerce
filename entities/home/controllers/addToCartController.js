const addToCart = require("../services/addToCart");

module.exports = (req, res) => {
  
  addToCart(req.session.user, req.params.productId);
  res.redirect("/cart");

}