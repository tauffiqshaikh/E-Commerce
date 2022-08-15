const goToCart = (req, res) => {
  res.render("cart.ejs", {user : req.session.user});
}

module.exports = goToCart;