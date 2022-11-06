const express = require("express");
const userController = require("../../controllers/userController");

const userRoute =  express.Router();
//GET
userRoute.get("/getUser",  userController.getUser);
//POST
userRoute.post("/postUser",  userController.postUser);
//PUT
userRoute.put("/putUser/:id",  userController.updateUser);
//DELETE
userRoute.delete("/removeUser/:id",  userController.removeUser);

module.exports = userRoute