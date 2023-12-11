const { findAll, findOneById, insertOne } = require("../models/albums.model");

const getAll = async ({res, next}) => {
  try {
    const [albums] = await findAll();
    res.status(200).json(albums);
  } catch (error) {
    next(error);
  }
};

const getOneById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [[album]] = await findOneById(id);

    if (album) res.status(200).json(album);
    else res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const [result] = await insertOne(req.body);

    if (result.affectedRows > 0) {
      const [[album]] = await findOneById(result.insertId);
      res.status(201).json(album);
    }
    else
      res.status(400).json("You must specified a title, genre, picture, artist data for new album");
  
  } catch (error) {
    next(error);
  }
}

module.exports = {getAll, getOneById, create};
