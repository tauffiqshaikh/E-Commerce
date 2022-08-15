const sendMail = require("../services/sendMail");
const getUserByEmail = require("../services/getUserByEmail");

module.exports = async (req, res) => {
  const user = await getUserByEmail(req.body.email)
  sendMail(`http://localhost:3000/user/reset-password/${user.username}`, req.body.email, "Reset your password");

  res.redirect("/user/login");
}