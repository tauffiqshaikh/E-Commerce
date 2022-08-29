const express = require("express");
const router = express.Router();

const getHomePageController = require("../controllers/getHomePageController");
const getProductDetails = require("../controllers/getProductDetails");
const checkAuth = require("../controllers/checkAuth");
const goToCart = require("../controllers/goToCart");
const goBack = require("../controllers/goBack");
const addToCartController = require("../controllers/addToCartController");
const removeFromCartController = require("../controllers/removeFromCartController");
router.get("/", getHomePageController)
router.get("/details/:id", getProductDetails);
router.get("/cart", checkAuth, goToCart);
router.get("/back", checkAuth, goBack);

router.route("/add-to-cart/:productId")
.get(checkAuth, addToCartController)
router.route("/remove-from-cart/:productId")
.post(checkAuth, removeFromCartController)

module.exports = router;
