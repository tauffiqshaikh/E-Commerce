const bcrypt = require("bcrypt");

module.exports = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
}