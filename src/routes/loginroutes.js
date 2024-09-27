const express = require("express");
const loginController = require("../api/login");

const router = express.Router();

router.post("/", loginController);

module.exports = router;
