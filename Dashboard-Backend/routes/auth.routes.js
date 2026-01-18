const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers.js");

// Register
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

// Forgot Password
router.post("/forgot-password", authController.forgotPassword);

module.exports = router;
