const userModel = require("../../../database/models/user");

module.exports = (username, password) =>{
 return userModel.findOneAndUpdate({username}, {password});
}
