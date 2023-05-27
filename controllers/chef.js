const services = require("../services/chef");

const getAllChefs = (_req, res) => {
  const chefList = services.getAllChefsService();
  res.status(200).json(chefList);
};

const getChefById = (req, res) => {
  let { id } = req.params;
  id = Number(id);

  const chef = services.getChefByIdService(id);
  res.status(200).json(chef);
};

module.exports = { getAllChefs, getChefById };
