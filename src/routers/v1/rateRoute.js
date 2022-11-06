const express = require("express");
const rateController = require("../../controllers/rateController");

const rateRoute =  express.Router();

rateRoute.get("/getRateRes",  rateController.getRateRes);

rateRoute.post("/postRateRes",  rateController.postRateRes);


module.exports = rateRoute;