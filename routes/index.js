const route = require("express").Router();
const chefs = require("./chef");
const recipe = require("./recipe");

route.use("/api/v1/chefs", chefs);
route.use("/api/v1/recipes", recipe);

module.exports = route;
