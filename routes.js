const express = require("express");
const signuproute = require("./routes/signuproutes");
const loginroute = require("./routes/signuproutes");

const routes = express.Route();

routes.use("/signup", signuproute);
routes.use("/login",loginroute);

module.exports = routes;
