module.exports = (req, res) => {
  req.session.isAuthenticated = false;
  delete req.session.user;

  res.redirect("/");
}