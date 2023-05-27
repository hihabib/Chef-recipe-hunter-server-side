const route = require("express").Router();
const chefs = require("./chef");

route.use("/api/v1/chefs", chefs);

module.exports = route;
