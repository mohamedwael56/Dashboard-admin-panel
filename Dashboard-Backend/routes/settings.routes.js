const express = require("express");
const router = express.Router();

const { getSettings } = require("../controllers/settings.controllers.js");

router.get("/", getSettings);

module.exports = router;
