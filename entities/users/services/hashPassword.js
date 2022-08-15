const bcrypt = require('bcrypt');


module.exports = async (password) =>{
  const saltRounds = 10;
  var hashedPassword = await bcrypt.hash(password, saltRounds);
  
  return hashedPassword;

}
