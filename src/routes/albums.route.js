const router = require("express").Router();
const { getAll, getOneById } = require("../controllers/albums.controller");

router.get("/albums", getAll);
router.get("/albums/:id", getOneById);

module.exports = router;