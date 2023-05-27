const services = require("../services/chef");

const getAllChefs = async (_req, res) => {
  const chefList = await services.getAllChefsService();
  res.status(200).json(chefList);
};

const getChefById = async (req, res) => {
  let { id } = req.params;
  id = Number(id);

  const chef = await services.getChefByIdService(id);
  res.status(200).json(chef);
};

module.exports = { getAllChefs, getChefById };
