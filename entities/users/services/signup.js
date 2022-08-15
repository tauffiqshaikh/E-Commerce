var userModel = require("../../../database/models/user");
const sendMail = require("./sendMail");

module.exports = async (user) => {
  const newUser = await userModel.create(user);
  sendMail(`http://localhost:3000/user/verify/${newUser._id.toString()}`, user.email, "Verify your account");
}