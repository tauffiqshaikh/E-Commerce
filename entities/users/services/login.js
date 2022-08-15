const userModel = require("../../../database/models/user");

module.exports =  function(username)
{
  return userModel.findOne({ username})
}