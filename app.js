const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const signupRoutes = require('./src/routes/signuproutes'); 
const loginRoutes = require("./src/routes/loginroutes")

const app = express();

app.use(bodyParser.json());
const corsOptions = {
  origin: "https://formsuser.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use('/signup', signupRoutes);
app.use("/login",loginRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
