const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.get("/", (req, res) => {
  res.send("Server running on port 5000");
});

server.use(express.json());
server.use("/api/schemes", SchemeRouter);

module.exports = server;
