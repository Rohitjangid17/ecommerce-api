const fs = require("fs");
const model = require("../model/product");
const { default: mongoose } = require("mongoose");
const { replaceUserById } = require("./user");
const Product = model.Product;
const products = [];

// create product
exports.createProduct = (req, res) => {
    const product = new Product(req.body);

    // save the product to the database
    product.save()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            res.status(500).json({ error: "Failed to save product" });
        });
}

// get product list
exports.productsList = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
}

// get product by id
exports.getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
}

// update product by id
exports.updateProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

// replace product by id
exports.replaceProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

// delete product by id
exports.deleteProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOneAndDelete();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}