const fs = require("fs/promises");
const path = require("path");
const binarySearch = require("../utilities/search");

const getAllChefsService = async () => {
  try {
    let chefList = await fs.readFile(path.join(appRoot, "fakeDB", "chef.json"));
    return JSON.parse(chefList);
  } catch (error) {
    console.log(error);
  }
};

const getChefByIdService = async (id) => {
  try {
    let chefList = await fs.readFile(path.join(appRoot, "fakeDB", "chef.json"));
    chefList = JSON.parse(chefList);
    const { index, error } = binarySearch(
      chefList[0]._id,
      chefList[chefList.length - 1]._id,
      id
    );

    if (!error) {
      return chefList[index];
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllChefsService, getChefByIdService };
