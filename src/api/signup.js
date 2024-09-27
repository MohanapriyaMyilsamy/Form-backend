const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/signupdata/db");
const connectDB = require("../database")
require("dotenv").config();

connectDB();

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User already registered" });
  }

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  user = new User({
    username,
    email,
    password: hashedPassword,
  });

  await user.save();

  const token = jwt.sign({ userId: user._id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "1h",
  });

  res.status(201).json({
    message: "User registered successfully",
    token,
  });
};

module.exports = signup;
