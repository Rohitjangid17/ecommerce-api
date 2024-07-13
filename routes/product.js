const express = require("express");
const productController = require("../controller/product");
const router = express.Router();

// Product API
router
    .get("/", productController.productsList)
    .get("/:id", productController.getProductById)
    .post("/", productController.createProduct)
    .put("/:id", productController.updateProductById)
    .patch("/:id", productController.replaceProductById)
    .delete("/:id", productController.deleteProductById);

exports.router = router;