const express = require("express");
const router = express.Router();

const { getSales } = require("../controllers/sales.controllers.js");

router.get("/", getSales);

module.exports = router;
