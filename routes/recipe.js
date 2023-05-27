const route = require("express").Router();
const middleware = require("../middleware/validateRequest");

const controller = require("../controllers/recipe");

route.get(
  "/:id",
  middleware.validateId,
  controller.getRecipesByChefIdController
);

module.exports = route;
