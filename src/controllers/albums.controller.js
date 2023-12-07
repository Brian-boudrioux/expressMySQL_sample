const { findAll, findOneById } = require("../models/albums.model");

const getAll = async ({res}) => {
  try {
    const [albums] = await findAll();
    res.status(200).json(albums);
  } catch (error) {
    console.error(error);
    res.status(500).json("erreur serveur...");
  }
};

const getOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[album]] = await findOneById(id);

    if (album) res.status(200).json(album);
    else res.sendStatus(404);
  } catch (error) {
    console.error(error);
    res.status(500).json("erreur serveur...");
  }
};

module.exports = {getAll, getOneById};
