const validateId = (req, res, next) => {
  let { id } = req.params;
  id = Number(id);
  if (typeof id !== "number" || Number.isNaN(id)) {
    res.status(400).json({ error: "id is not valid" });
  } else {
    next();
  }
};
module.exports = { validateId };
