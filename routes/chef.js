const route = require("express").Router();

const controller = require("../controllers/chef");

/**
 * Get all chefs
 */
route.get("/", controller.getAllChefs);

/**
 * get specific chef details
 */
route.get("/:id", controller.getChefById);

module.exports = route;
