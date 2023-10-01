const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/authController");

router.post("/register", authController.controllers.postRegister);

router.post("/login", authController.controllers.postLogin);

module.exports = router;
