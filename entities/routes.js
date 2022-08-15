const homeRoutes = require("./home/routes/homeRoutes");
const userRoutes = require("./users/routes/userRoutes");
const session = require("express-session");

module.exports =  function initRoutes(app)
{
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

  app.use("/", homeRoutes);
  app.use("/user", userRoutes);
}