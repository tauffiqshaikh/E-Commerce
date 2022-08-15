const userModel = require("../../../database/models/user");

module.exports =  function(email)
{
  return userModel.findOne({ email});
}