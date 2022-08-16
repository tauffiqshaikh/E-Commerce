const express = require("express");

const router = express.Router();

const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const logoutController = require("../controllers/logoutController");
const verifyUserController = require("../controllers/verifyUserController");
const forgotPasswordController = require("../controllers/forgotPasswordController");
const resetPasswordController = require("../controllers/resetPasswordController");
const sendPasswordMailController = require("../controllers/sendPasswordMailController");

router.route("/login")
.get(loginController.getReq)
.post(loginController.postReq)


router.route("/signup")
.get(signupController.getReq)
.post(signupController.postReq)

router.route("/logout")
.post(logoutController)

router.route("/verify/:id")
.get(verifyUserController)

router.route("/reset-password/:username")
.get(resetPasswordController.getReq)
.post(resetPasswordController.postReq)

router.route("/forgot-password")
.get(forgotPasswordController)
.post(sendPasswordMailController)


module.exports = router;