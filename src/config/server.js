const express = require("express");
const server = express();
const albumsRouter = require("../routes/albums.route");
const errorHandler = require("../middlewares/errorHandler");

server.use(express.json());

// config routes here
// server.get("/", (req, res) => {
//   res.json("Welcome to pets api");
// });

// albums routes
server.use(albumsRouter);

server.use(errorHandler);


module.exports = server;
