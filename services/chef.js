const binarySearch = require("../utilities/search");

const getAllChefsService = () => {
  return require("../fakeDB/chef.json");
};

const getChefByIdService = (id) => {
  const chefList = require("../fakeDB/chef.json");
  const { index, error } = binarySearch(
    chefList[0]._id,
    chefList[chefList.length - 1]._id,
    id
  );

  if (!error) {
    return chefList[index];
  }
};

module.exports = { getAllChefsService, getChefByIdService };
