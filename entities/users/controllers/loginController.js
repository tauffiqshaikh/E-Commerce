const comparePassword = require("../services/comparePassword");
const loginUser = require("../services/login");

module.exports.getReq = function(req, res)
{
  if(req.session.isAuthenticated){
    res.redirect('/');
    return;
  }
  res.render("login.ejs", {err : null})
}

module.exports.postReq = async (req, res)=>{

  var username = req.body.username;
  var password = req.body.password;

  try{
    var user = await loginUser(username);
    if(!user)
      throw new Error("user does not exist");
    
    if(!user.isVerified)
      throw new Error("user not verifed");

    const match = await comparePassword(password, user.password);
    if(match){
      req.session.isAuthenticated = true;
      req.session.user = username;
      res.redirect("/");
      return;
    }

    throw new Error("incorrect password");
  }catch(err){
    res.render("login.ejs", {err});
  }

}