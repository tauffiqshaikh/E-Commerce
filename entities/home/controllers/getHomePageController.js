const getAllProducts = require("../services/getAllProducts");

const paginatedResults = (data) =>{

}

module.exports = async (req, res) => {

  const products = await getAllProducts();
  
  if(req.session.isAuthenticated){
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const start = (page - 1) * limit;
    const end = (page) * limit;
    var result = {};
    result.filteredProducts = products.slice(start, end);

    if(end < products.length){
      result.next = {
        page : page + 1,
        limit : limit
      }
    }

    if(start > 0){
      result.prev = {
        page : page - 1,
        limit : limit
      }  
    }
    res.render("index.ejs", {user : req.session.user, products : result });
    return;
  }
  res.redirect("/user/login");
}