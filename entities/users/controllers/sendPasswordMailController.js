const sendMail = require("../services/sendMail");
const getUserByEmail = require("../services/getUserByEmail");

module.exports = async (req, res) => {
  const user = await getUserByEmail(req.body.email)
  console.log(user)
  if(!user){
    res.render("forgotPassword.ejs", {err : "user does not exist"})
  }else if(!user.isVerified){
    res.render("forgotPassword.ejs", {err : "user has not been verified yet"})
  }
  else{
    sendMail(`http://localhost:3000/user/reset-password/${user.username}`, req.body.email, "Reset your password");
    res.redirect("/user/login");
  }

}