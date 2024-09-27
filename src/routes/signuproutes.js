const express = require("express");
const signupController = require("../api/signup");

const router = express.Router();

router.post("/", signupController);

module.exports = router;
