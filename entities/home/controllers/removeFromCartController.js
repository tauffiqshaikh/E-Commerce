const removeFromCart = require("../services/removeFromCart");

module.exports = (req, res) => {
  
  removeFromCart(req.session.user, req.params.productId);
  res.redirect("/cart");

}