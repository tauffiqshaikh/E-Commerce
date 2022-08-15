const express = require("express");
const router = express.Router();

const getHomePageController = require("../controllers/getHomePageController");
const getProductDetails = require("../controllers/getProductDetails");
const checkAuth = require("../controllers/checkAuth");
const goToCart = require("../controllers/goToCart");
const goBack = require("../controllers/goBack");

router.get("/", checkAuth, getHomePageController)
router.get("/details/:id", checkAuth, getProductDetails);
router.get("/cart", checkAuth, goToCart);
router.get("/back", checkAuth, goBack);

module.exports = router;
