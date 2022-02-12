const path = require("path");

const express = require("express");

// const rootDir = require("../helpers/path");
// const adminData = require("./admin");

const productController = require("../controllers/shop");

const router = express.Router();

// Root Route
router.get("/", productController.getIndex);

// Products Route
router.get("/products", productController.getProducts);

// Cart Route
router.get("/cart", productController.getCart);

// Checkout Route
router.get("/checkout", productController.getCheckout);
module.exports = router;
