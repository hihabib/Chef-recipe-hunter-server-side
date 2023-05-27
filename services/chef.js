const binarySearch = require("../utilities/search");

const getAllChefsService = () => {
  let chefList = require("../fakeDB/chef.json");
  return JSON.parse(chefList);
};

const getChefByIdService = (id) => {
  let chefList = require("../fakeDB/chef.json");
  chefList = JSON.parse(chefList);
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
