const db = require("../config/database");

const findAll = () => {
  return db.query("SELECT * FROM albums");
}

const findOneById = (id) => {
  return db.query("SELECT * FROM albums WHERE id=?", [id]);
}

module.exports = { findAll, findOneById };
