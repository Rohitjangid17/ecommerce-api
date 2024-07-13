const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

// product list GET API
router
    .get("/", userController.usersList)
    .get("/:id", userController.getUserById)
    .post("/", userController.createUser)
    .put("/:id", userController.updateUserById)
    .patch("/:id", userController.replaceUserById)
    .delete("/:id", userController.deleteUserById);

exports.router = router;