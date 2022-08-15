module.exports = (req, res, next) => {
  if(req.session.isAuthenticated){
    next();
    return;
  }
  res.redirect("/user/login")
}