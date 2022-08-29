const signupUser = require("../services/signup");
var hashPassword = require("../services/hashPassword");

module.exports.getReq = (req, res)=>{
  res.render("signup.ejs", {err : null});
}

module.exports.postReq = async (req, res) => {
  try{
    var password = req.body.password;
    if(password !== req.body.confirmed_password){
      res.render("signup.ejs", {err : "passwords don't match"});
      return;
    }
    var username = req.body.username;
    var email = req.body.email;

  
    const hashedPassword = await hashPassword(password);
    var user = {
      username,
      email,
      password : hashedPassword,
      isVerified : false,
      cart : null
    }
    
    await signupUser(user);

    res.redirect('/user/login');

  }catch(err){
    if(err.code = 11000){
      res.render("signup.ejs", {err : "username or email already taken"});
      console.log(err)
      return;
    }
    res.render("signup.ejs", {err})
  }

}