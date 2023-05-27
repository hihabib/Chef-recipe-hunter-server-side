const fs = require("fs/promises");
const path = require("path");
const binarySearch = require("../utilities/search");

const getRecipesByChefIdService = async (id) => {
  try {
    // get all recipes
    let recipes = await fs.readFile(
      path.join(path.dirname(require.main.filename), "fakeDB", "recipe.json")
    );
    recipes = JSON.parse(recipes);

    // get all chefs
    let allChefs = await fs.readFile(
      path.join(path.dirname(require.main.filename), "fakeDB", "chef.json")
    );
    allChefs = JSON.parse(allChefs);

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
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getRecipesByChefIdService };
