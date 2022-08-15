const userModel = require("../../../database/models/user");
var {ObjectId} = require("mongodb")

module.exports = (id) =>{
 return userModel.findOneAndUpdate({_id : new ObjectId(id)}, {isVerified : true});
}
