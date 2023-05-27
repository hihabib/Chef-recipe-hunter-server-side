const service = require("../services/recipe.js");

const getRecipesByChefIdController = async (req, res) => {
  let { id } = req.params;

  id = Number(id);
  const getRecipes = await service.getRecipesByChefIdService(id);
  res.status(200).json(getRecipes);
};

module.exports = { getRecipesByChefIdController };
