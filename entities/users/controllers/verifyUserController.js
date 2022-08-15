const verifyUser = require("../services/findAndUpdate");

const verifyUserController = async (req, res) =>{

  await verifyUser(req.params.id);
  res.redirect("/user/login");

}

module.exports = verifyUserController;