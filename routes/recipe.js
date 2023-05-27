const route = require("express").Router();

const controller = require("../controllers/recipe");

route.get("/:id", controller.getRecipesByChefIdController);

module.exports = route;
