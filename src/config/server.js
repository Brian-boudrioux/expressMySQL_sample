const express = require("express");
const server = express();
const albumsRouter = require("../routes/albums.route");

// config routes here
server.get("/", (req, res) => {
  res.json("Welcome to pets api");
});

// albums routes
server.use(albumsRouter);


module.exports = server;
