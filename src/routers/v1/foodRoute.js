const express = require("express");
const foodController = require("../../controllers/foodController");
const foodRoute =  express.Router();

foodRoute.get("/demo", foodController.getFoodDemo)

module.exports = foodRoute