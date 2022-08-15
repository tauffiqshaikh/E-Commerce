const getSingleProduct = require("../services/getSingleProduct");

module.exports = async (req, res) => {
  var product = await getSingleProduct(req.params.id);
  res.render("details.ejs", {user : req.session.user, product});
}