const express = require("express");
const likeController = require("../../controllers/likeController");

const likeRoute =  express.Router();

likeRoute.get("/getUserLikeRes",  likeController.getUserLikeRes);

likeRoute.post("/postUserLikeRes",  likeController.postUserLikeRes);

module.exports = likeRoute;