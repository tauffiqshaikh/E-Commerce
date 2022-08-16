const addToCart = require("../services/addToCart");

module.exports = async (req, res) => {
  await addToCart(req.session.user, req.params.productId);
  res.redirect("/cart");

}