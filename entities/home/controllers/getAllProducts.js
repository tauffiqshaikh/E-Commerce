const getAllProducts = require("../services/getAllProducts");

module.exports = async (req, res) => {

  // const products = await getAllProducts();

  
  if(req.session.isAuthenticated){
    res.render("index.ejs", {user : req.session.user, products : null});
    return;
  }
  res.redirect("/user/login");
}