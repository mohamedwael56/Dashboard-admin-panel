const express = require("express");
const router = express.Router();

const { getCharts } = require("../controllers/charts.controllers.js");

// GET charts data
router.get("/", getCharts);

module.exports = router;
