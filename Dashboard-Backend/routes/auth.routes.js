const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers.js");

// Login
router.post("/login", authController.login);

// Register
router.post("/register", authController.register);

module.exports = router;
