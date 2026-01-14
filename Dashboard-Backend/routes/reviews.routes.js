const express = require("express");
const router = express.Router();

const { getReviews } = require("../controllers/reviews.controllers.js");

router.get("/", getReviews);

module.exports = router;
