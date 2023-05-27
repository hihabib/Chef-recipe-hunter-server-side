const binarySearch = require("../utilities/search");

const getRecipesByChefIdService = (id) => {
  // get all recipes
  const recipes = require("../fakeDB/recipe.json");

  // get all chefs
  const allChefs = require("../fakeDB/chef.json");

  const { index, error } = binarySearch(
    allChefs[0]._id,
    allChefs[allChefs.length - 1]._id,
    id
  );

  if (!error) {
    const recipesId = allChefs[index].recipes;
    // get all recipes of specific chef
    const recipesOfSpecificChef = recipesId.reduce((acc, next) => {
      const { index } = binarySearch(
        recipes[0]._id,
        recipes[recipes.length - 1]._id,
        next
      );

      const searchedRecipe = recipes[index];
      acc.push(searchedRecipe);
      return acc;
    }, []);
    return recipesOfSpecificChef;
  } else {
    return { error: "chef not found" };
  }
};

module.exports = { getRecipesByChefIdService };
