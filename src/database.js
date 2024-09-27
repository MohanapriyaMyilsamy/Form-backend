const mongoose = require("mongoose");
const connectDB = async (req, res) => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Could not connect to MongoDB", error));
};

module.exports = connectDB;
