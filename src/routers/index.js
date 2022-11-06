const express = require("express");
const rootRouter = express.Router();

const userRoute = require("./v1/userRoute");
const foodRoute = require("./v1/foodRoute");
const likeRoute = require("./v1/likeRoute");
const rateRoute = require("./v1/rateRoute");
const orderRoute = require("./v1/orderRoute");

rootRouter.use("/user/v1", userRoute);
rootRouter.use("/food/v1", foodRoute);
rootRouter.use("/like/v1", likeRoute);
rootRouter.use("/rate/v1", rateRoute);
rootRouter.use("/order/v1", orderRoute);

module.exports = rootRouter;