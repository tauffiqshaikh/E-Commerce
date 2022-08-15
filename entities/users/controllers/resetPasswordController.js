const findAndUpdate = require("../services/findAndUpdate");
const findOneUser = require("../services/login");
const changePassword = require("../services/changePassword");
var hashPassword = require("../services/hashPassword");

module.exports.getReq = (req, res) => {
  res.render("resetPassword.ejs", {user : req.params.username, err : null, err : null});
}

module.exports.postReq = async (req, res) => {
  const username = req.params.username;
  const password = req.body.password;
  const confirmedPassword = req.body.confirmedPassword;
  console.log(confirmedPassword)

  if(password !== confirmedPassword){
    res.render("resetPassword.ejs", {user : username, err : new Error("passwords don't match")});
    return;
  }
  const hashedPassword = await hashPassword(password);

  await changePassword(username, hashedPassword);
  res.redirect("/user/login");
}