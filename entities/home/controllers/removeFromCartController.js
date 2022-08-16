const removeFromCart = require("../services/removeFromCart");

module.exports = async (req, res) => {
  
  await removeFromCart(req.session.user, req.params.productId, req.query.all);

  res.redirect("/cart");

}