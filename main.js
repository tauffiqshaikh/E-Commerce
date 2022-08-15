
const express = require('express')
require('dotenv').config();
var initiateMongoConnection = require("./database/init");

const app = express();

app.use(express.static("./static"));

app.set("view engine","ejs")

app.use(express.urlencoded({ extended:true }));

const initiateRoutes = require("./entities/routes");

const startApp = async () =>{
  try{
    await initiateMongoConnection();
    console.log("DB CONNECTED");
    const port = 3000;
    initiateRoutes(app);
    app.listen(port, () => {
      console.log(`listening at http://localhost:${port}`);
    })
  }catch(err){
    console.log("DB ERR");
  }
}

startApp();