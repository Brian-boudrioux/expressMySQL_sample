const db = require("../config/database");

const findAll = () => {
  return db.query("SELECT * FROM albums");
}

const findOneById = (id) => {
  return db.query("SELECT * FROM albums WHERE id=?", [id]);
}

const insertOne = (album) => {
  const {title, genre, picture, artist} = album;
  return db.query("INSERT INTO albums (title, genre, picture, artist) VALUES (?, ?, ?, ?)", 
  [title, genre, picture, artist]);
}

module.exports = { findAll, findOneById, insertOne };
