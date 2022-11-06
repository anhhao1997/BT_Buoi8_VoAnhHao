const express = require("express");
const orderController = require("../../controllers/orderController");

const orderRoute =  express.Router();

orderRoute.post("/postOrder",  orderController.postOrder);

module.exports = orderRoute;