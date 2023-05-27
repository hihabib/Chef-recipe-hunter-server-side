const service = require("../services/recipe.js");

const getRecipesByChefIdController =  (req, res) => {
  let { id } = req.params;

  id = Number(id);
  const getRecipes =  service.getRecipesByChefIdService(id);
  res.status(200).json(getRecipes);
};

module.exports = { getRecipesByChefIdController };
