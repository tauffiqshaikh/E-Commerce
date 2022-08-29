const getAllProducts = require("../services/getAllProducts");

module.exports = async (req, res) => {
  const products = await getAllProducts();
  
  const limit = req.query.limit || 5;
  var result = {};
  result.filteredProducts = products.slice(0, limit);

  if(limit < products.length){
    result.next = {
      limit : limit
    }
  }
  res.render("index.ejs", {user : req.session.user, products : result });
}
