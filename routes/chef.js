const route = require("express").Router();
const fs = require("fs/promises");
const path = require("path");

route.get("/", async (req, res) => {
  try {
    let chefList = await fs.readFile(
      path.join(path.dirname(require.main.filename), "fakeDB", "chef.json")
    );
    chefList = JSON.parse(chefList);
    res.status(200).json(chefList);
  } catch (error) {
    console.log(error);
  }
});



module.exports = route;
