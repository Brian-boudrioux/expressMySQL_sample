const router = require("express").Router();
const { getAll, getOneById, create } = require("../controllers/albums.controller");
const validateAlbum = require("../middlewares/validateAlbum");

router.get("/albums", getAll);
router.get("/albums/:id", getOneById);
router.post("/albums", validateAlbum, create);

module.exports = router;