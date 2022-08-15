const signupUser = require("../services/signup");
var hashPassword = require("../services/hashPassword");

module.exports.getReq = (req, res)=>{
  res.render("signup.ejs", {err : null});
}

module.exports.postReq = async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;

  try{
    const hashedPassword = await hashPassword(password);
    var user = {
      username,
      email,
      password : hashedPassword,
      isVerified : false
    }
    
    await signupUser(user);

    res.redirect('/user/login');

  }catch(err){
    if(err.code = 11000){
      res.render("signup.ejs", {err : "username or email already taken"});
    }
  }

}