const express = require("express");
const router = express.Router();
const { deleteAccount } = require("../controllers/account.Controllers.js");

router.delete("/delete-account", deleteAccount);

module.exports = router;
