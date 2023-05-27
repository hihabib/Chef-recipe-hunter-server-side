const route = require("express").Router();
const middleware = require("../middleware/validateRequest");
const controller = require("../controllers/chef");

/**
 * Get all chefs
 */
route.get("/", controller.getAllChefs);

/**
 * get specific chef details
 */
route.get("/:id", middleware.validateId, controller.getChefById);

module.exports = route;
